import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/styles/Color";
import Button from "@/components/Button";
import CalendarHorizontal from "@/components/CalendarHorizontal";
import CalendarVertical from "@/components/CalendarVertical";

const Mainpage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <CalendarHorizontal setShowCalendar={setShowCalendar} />
            <Text style={styles.centeredText}>
                등록된 하루동선이 없습니다.{"\n"} 나의 하루동선을 만들어보세요.
            </Text>
            <Button
                color={"Primary"}
                size="l"
                onPress={() => setShowCalendar(true)}
                type="filled"
                title="나의 하루동선 만들기"
                width={216}
            />
            {showCalendar && (
                <Modal onRequestClose={() => setShowCalendar(false)}>
                    <CalendarVertical />
                </Modal>
            )}
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
