import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Toggle from "@/components/Toggle/Toggle";
import { RouteProp, useRoute } from "@react-navigation/native";
import Frame from "@/components/Frame/Frame";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import ButtonAction from "@/components/Button/ButtonAction";
import DropBox from "@/components/DropBox";
import Button from "@/components/Button";
import { RouteTag, getRouteTags } from "@/apis/routeTags";
import debounce from "lodash.debounce";

export type MypageParams = {
    Makingpage: {
        date: string;
    };
};

type TransportType = "대중교통" | "도보" | "자전거" | "자동차";

const Makingpage: React.FC = () => {
    const route = useRoute<RouteProp<MypageParams, "Makingpage">>();
    const date = route.params?.date;
    const [firstToggleOpen, setFirstToggleOpen] = useState(true);
    const [secondToggleOpen, setSecondToggleOpen] = useState(false);
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

    const debouncedFetchRouteTags = useCallback(
        debounce(async (input: string) => {
            if (input.length > 0) {
                try {
                    const data = await getRouteTags(input);
                    setRouteTags(data);
                } catch (error) {
                    console.error("Failed to fetch route tags", error);
                }
            }
        }, 500),
        [],
    );

    useEffect(() => {
        if (tagInputFocused) {
            debouncedFetchRouteTags(tagInput);
        }
        return () => debouncedFetchRouteTags.cancel();
    }, [tagInputFocused, tagInput, debouncedFetchRouteTags]);

    return (
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
                            defaultValue={formatDate(date)}
                            inputState="disabled"
                        />
                    </Frame>
                    <Frame title="제목">
                        <Input
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
                                onBlur={() => setTagInputFocused(false)}
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
                                onPress={() => handleButtonAction(transport)}
                            />
                        ))}
                    </Frame>
                </View>
            )}
            <View style={styles.gap} />
            <Toggle
                title="동선 만들기"
                expanded={secondToggleOpen}
                handlePress={() => {
                    setSecondToggleOpen((prev) => !prev);
                }}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title={"동선 만들기"}
                    onPress={() => {}}
                    disabled={!title}
                    type={"filled"}
                    size={"l"}
                    color={"Primary"}
                    width={320}
                />
            </View>
        </View>
    );
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
});

export default Makingpage;
