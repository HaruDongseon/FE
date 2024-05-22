import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/styles/Color";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "@/components/Button";
import WeeklyCalendar from "@/components/WeeklyCalendar";
import Icon from "@/components/icon/Common";
import MonthlyCalendar from "@/components/MonthlyCalendar";

const Mainpage: React.FC = () => {
    const [monthlyCalendarOpen, setMonthlyCalendarOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Pressable
                        onPress={() => navigation.navigate("Calendarpage")}
                    >
                        <Icon type="AddL" />
                    </Pressable>
                    <Text style={styles.monthYearText}>
                        {currentDate.getFullYear()}년{" "}
                        {currentDate.getMonth() + 1}월
                    </Text>
                    <Pressable
                        onPress={() => setMonthlyCalendarOpen((prev) => !prev)}
                    >
                        <Icon type="CalendarL" />
                    </Pressable>
                </View>
                {monthlyCalendarOpen ? (
                    <MonthlyCalendar
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                ) : (
                    <WeeklyCalendar
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                )}
            </View>
            <Text style={styles.centeredText}>
                등록된 하루동선이 없습니다.{"\n"} 나의 하루동선을 만들어보세요.
            </Text>
            <Button
                color={"Primary"}
                size="l"
                onPress={() => navigation.navigate("Calendarpage")}
                title="나의 하루동선 만들기"
                width={216}
                type={"filled"}
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
    headerContainer: {
        backgroundColor: Colors.white,
        shadowColor: "#042826",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        height: 112,
        zIndex: 9999,
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 4,
        paddingHorizontal: 20,
        paddingVertical: 6,
        height: 44,
    },
    monthYearText: {
        fontSize: 18,
        color: Colors.grayScale600,
    },
});

export default Mainpage;
