import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/styles/Color";
import Button from "@/components/Button";
import CalendarHorizontal from "@/components/CalendarHorizontal";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Mainpage: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <CalendarHorizontal />
            <Text style={styles.centeredText}>
                등록된 하루동선이 없습니다.{"\n"} 나의 하루동선을 만들어보세요.
            </Text>
            <Button
                color={"Primary"}
                size="l"
                onPress={() => navigation.navigate("Calendarpage")}
                type="filled"
                title="나의 하루동선 만들기"
                width={216}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
    },
    centeredText: {
        lineHeight: 24,
        marginTop: 208,
        fontSize: 16,
        color: Colors.grayScale600,
        fontWeight: "500",
        marginBottom: 16,
        textAlign: "center",
    },
});

export default Mainpage;
