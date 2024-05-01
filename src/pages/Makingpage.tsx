import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Toggle from "@/components/Toggle/Toggle";
import { RouteProp, useRoute } from "@react-navigation/native";

export type MypageParams = {
    Makingpage: {
        date: string;
    };
};

const Makingpage: React.FC = () => {
    const [firstToggleOpen, setFirstToggleOpen] = useState(true);
    const [secondToggleOpen, setSecondToggleOpen] = useState(false);
    const route = useRoute<RouteProp<MypageParams, "Makingpage">>();

    return (
        <View style={styles.container}>
            <Toggle
                title="동선 기본 정보"
                expanded={firstToggleOpen}
                handlePress={() => {
                    setFirstToggleOpen((prev) => !prev);
                }}
            />
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
    gap: {
        height: 8,
    },
});

export default Makingpage;
