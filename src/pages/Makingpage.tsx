import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Toggle from "@/components/Toggle/Toggle";
import { RouteProp, useRoute } from "@react-navigation/native";
import Frame from "@/components/Frame/Frame";
import Colors from "@/styles/Color";
import Input from "@/components/Input";
import ButtonAction from "@/components/Button/ButtonAction";
import DropBox from "@/components/DropBox";

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
    const [dropBoxVisible, setDropBoxVisible] = useState(false);
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

    const handleToggleDropBox = () => {
        setDropBoxVisible(true);
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
                            onChangeText={() => {}}
                        />
                    </Frame>
                    <View style={styles.tagConatiner}>
                        <Frame title="태그">
                            <Input
                                size={"M"}
                                placeholder={"#태그를 입력해주세요"}
                                onChangeText={() => {}}
                                onFocus={handleToggleDropBox}
                            />
                            {/* <DropBox hashtags={["#성수", "#성수2"]} /> */}
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
});

export default Makingpage;
