import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
    Text,
    Pressable,
    Modal,
    ScrollView,
} from "react-native";
import Toggle from "@/components/Toggle/Toggle";
import {
    ParamListBase,
    RouteProp,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import Frame from "@/components/Frame/Frame";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import ButtonAction from "@/components/Button/ButtonAction";
import DropBox from "@/components/DropBox";
import Button from "@/components/Button";
import { RouteTag, getRouteTags } from "@/apis/routeTags";
import debounce from "lodash.debounce";
import { StackNavigationProp } from "@react-navigation/stack";
import Map from "@/components/Map";
import PlaceSearch from "@/components/Place/PlaceSearch";
import PlaceMovement from "@/components/Place/PlaceMovement";

export type MypageParams = {
    Makingpage: {
        date: string;
    };
};

type TransportType = "대중교통" | "도보" | "자전거" | "자동차";

interface RouteType {
    displayName: string;
    primaryTypeDisplayName?: string;
}

const Makingpage: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const route = useRoute<RouteProp<MypageParams, "Makingpage">>();
    const date = route.params?.date;
    const [firstToggleOpen, setFirstToggleOpen] = useState(true);
    const [tagInputFocused, setTagInputFocused] = useState(false);
    const [tagInput, setTagInput] = useState("");
    const [title, setTitle] = useState("");
    const [routeTags, setRouteTags] = useState<RouteTag[]>([]);
    const [buttonStates, setButtonStates] = useState({
        대중교통: "default",
        도보: "default",
        자전거: "default",
        자동차: "default",
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [addedRoute, setAddedRoute] = useState<RouteType[]>([]);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "2-digit",
            month: "long",
            day: "numeric",
            weekday: "long",
        };
        return new Intl.DateTimeFormat("ko-KR", options).format(date);
    };

    const handleButtonAction = (buttonName: TransportType) => {
        const activeCount = Object.values(buttonStates).filter(
            (status) => status === "active",
        ).length;
        const newStatus =
            buttonStates[buttonName] === "active" ? "default" : "active";

        if (newStatus === "active" && activeCount >= 3) {
            return;
        }

        setButtonStates((prev) => ({
            ...prev,
            [buttonName]: newStatus,
        }));
    };

    const handleTagInputBlur = () => {
        const tags = tagInput
            .split(" ")
            .map((word) => {
                if (!word.startsWith("#") && word.trim() !== "") {
                    return "#" + word;
                }
                return word;
            })
            .join(" ");
        setTagInput(tags);
        setTagInputFocused(false);
    };

    const debouncedFetchRouteTags = debounce(async (input: string) => {
        if (input.length > 0) {
            try {
                const data = await getRouteTags(input);
                setRouteTags(data);
            } catch (error) {
                console.error("Failed to fetch route tags", error);
            }
        }
    }, 500);

    const handlePlaceSearchEvent = (
        displayName: string,
        primaryTypeDisplayName?: string,
    ) => {
        setModalVisible(false);
        setAddedRoute((prev) => [
            ...prev,
            { displayName, primaryTypeDisplayName },
        ]);
    };

    useEffect(() => {
        if (tagInputFocused) {
            const splittedTagInput = tagInput.split(" ");
            let lastTag = splittedTagInput[splittedTagInput.length - 1];
            if (lastTag.startsWith("#")) {
                lastTag = lastTag.slice(1);
            }
            debouncedFetchRouteTags(lastTag);
        }
        return () => debouncedFetchRouteTags.cancel();
    }, [tagInputFocused, tagInput, debouncedFetchRouteTags]);

    if (!modalVisible) {
        return (
            <Pressable
                style={{ flex: 1 }}
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <View style={styles.container}>
                    <Toggle
                        title="동선 기본 정보"
                        expanded={firstToggleOpen}
                        handlePress={() => {
                            setFirstToggleOpen((prev) => !prev);
                        }}
                    />
                    {firstToggleOpen && (
                        <View style={styles.frameContainer}>
                            <Frame title="날짜">
                                <Input
                                    size={"M"}
                                    readOnly={true}
                                    defaultValue={formatDate(date)}
                                    onTouchStart={() =>
                                        navigation.navigate("Calendarpage")
                                    }
                                />
                            </Frame>
                            <Frame title="제목">
                                <Input
                                    value={title}
                                    size={"M"}
                                    placeholder={"제목을 입력해주세요"}
                                    onChangeText={setTitle}
                                    maxLength={15}
                                />
                            </Frame>
                            <View style={styles.tagConatiner}>
                                <Frame title="태그">
                                    <Input
                                        size={"M"}
                                        placeholder={"#태그를 입력해주세요"}
                                        value={tagInput}
                                        onChangeText={setTagInput}
                                        onFocus={() => setTagInputFocused(true)}
                                        onBlur={handleTagInputBlur}
                                    />
                                    {tagInputFocused && (
                                        <DropBox hashtags={routeTags} />
                                    )}
                                </Frame>
                            </View>
                            <Frame title="이동수단">
                                {(
                                    [
                                        "대중교통",
                                        "도보",
                                        "자전거",
                                        "자동차",
                                    ] as TransportType[]
                                ).map((transport) => (
                                    <ButtonAction
                                        key={transport}
                                        title={transport}
                                        status={
                                            buttonStates[transport] as
                                                | "default"
                                                | "active"
                                                | "disabled"
                                        }
                                        onPress={() =>
                                            handleButtonAction(transport)
                                        }
                                    />
                                ))}
                            </Frame>
                        </View>
                    )}
                    <View style={styles.gap} />
                    <Toggle
                        title="동선 만들기"
                        expanded={!firstToggleOpen}
                        handlePress={() => {
                            setFirstToggleOpen((prev) => !prev);
                        }}
                    />
                    {firstToggleOpen ? (
                        <View style={styles.buttonContainer}>
                            <Button
                                title={"동선 만들기"}
                                onPress={() => setFirstToggleOpen(false)}
                                disabled={!title}
                                type={"filled"}
                                size={"l"}
                                color={"Primary"}
                                width={320}
                            />
                        </View>
                    ) : (
                        <>
                            <Map />
                            <View
                                style={[
                                    styles.routeMakingContainer,
                                    addedRoute && { height: 368 },
                                ]}
                            >
                                <View style={styles.routeMakingHeader}>
                                    <Text style={styles.routeMakingText}>
                                        동선 만들기
                                    </Text>
                                    <Button
                                        title={"장소추가"}
                                        onPress={() => {
                                            setModalVisible(true);
                                        }}
                                        type={"outline"}
                                        size={"s"}
                                        color={"Gray"}
                                    />
                                </View>
                                <ScrollView style={{ flex: 1 }}>
                                    {addedRoute.map((route, idx) => (
                                        <PlaceMovement
                                            key={idx}
                                            idx={idx}
                                            displayName={route.displayName}
                                            primaryTypeDisplayName={
                                                route.primaryTypeDisplayName
                                            }
                                        />
                                    ))}
                                </ScrollView>
                                {/* <View style={styles.buttonContainer}>
                                    <Button
                                        title={"동선 만들기"}
                                        onPress={() =>
                                            setFirstToggleOpen(false)
                                        }
                                        disabled={!title}
                                        type={"filled"}
                                        size={"l"}
                                        color={"Primary"}
                                        width={320}
                                    />
                                </View> */}
                            </View>
                        </>
                    )}
                </View>
            </Pressable>
        );
    }
    if (modalVisible) {
        return (
            <Modal visible={true} transparent={false} animationType="slide">
                <PlaceSearch
                    handleEvent={(
                        displayName: string,
                        primaryTypeDisplayName: string | undefined,
                    ) =>
                        handlePlaceSearchEvent(
                            displayName,
                            primaryTypeDisplayName,
                        )
                    }
                />
            </Modal>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    frameContainer: {
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayScale50,
        padding: 20,
        rowGap: 24,
        zIndex: 99999,
    },
    gap: {
        height: 8,
    },
    tagConatiner: {
        position: "relative",
        zIndex: 9999,
    },
    buttonContainer: {
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        bottom: 34,
    },
    routeMakingContainer: {
        height: 232,
        position: "absolute",
        bottom: 0,
        backgroundColor: Colors.white,
        width: "100%",
        paddingTop: 24,
        paddingHorizontal: 20,
        borderRadius: 16,
        shadowColor: "#042826",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -6 },
        shadowRadius: 10,
    },
    routeMakingHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    routeMakingText: {
        color: Colors.grayScale600,
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
    },
    scrollViewContainer: {
        marginTop: 4,
    },
});

export default Makingpage;
