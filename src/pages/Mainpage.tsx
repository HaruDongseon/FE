import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Calendar from "@/components/Calendar";
import Colors from "@/styles/Color";
import Button from "@/components/Button";

const Mainpage: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Calendar />
            <Text style={styles.centeredText}>
                등록된 하루동선이 없습니다.{"\n"} 나의 하루동선을 만들어보세요.
            </Text>
            <Button
                color={"Primary"}
                size="l"
                onPress={() => console.log("버튼")}
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
    },
});

export default Mainpage;
