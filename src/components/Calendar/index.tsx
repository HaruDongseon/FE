import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "@/styles/Color"; // 경로에 맞게 수정해주세요.
import Icon from "../icon/Common";

// 날짜 배열을 반환하는 함수
const getWeekDates = (date: Date): Date[] => {
    const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
    return Array.from({ length: 7 }, (_, index) => {
        const day = new Date(weekStart);
        day.setDate(day.getDate() + index);
        return day;
    });
};

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();

    const weekDates = getWeekDates(new Date(currentDate));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon type="AddL" />
                <Text style={styles.monthYearText}>
                    {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
                </Text>
                <Icon type="CalendarL" />
            </View>
            <View style={styles.weekDays}>
                {["일", "월", "화", "수", "목", "금", "토"].map(
                    (day, index) => (
                        <View key={index} style={styles.dayContainer}>
                            <Text style={styles.dayText}>{day}</Text>
                        </View>
                    ),
                )}
            </View>
            <View style={styles.weekDates}>
                {weekDates.map((date, index) => (
                    <View key={index} style={styles.dateContainer}>
                        <Text
                            style={[
                                styles.dateText,
                                isSameDay(date, today)
                                    ? styles.currentDateText
                                    : null,
                            ]}
                        >
                            {date.getDate()}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const isSameDay = (d1: Date, d2: Date): boolean => {
    return (
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear()
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        alignItems: "center",
        height: 112,
        width: "100%",
        backgroundColor: Colors.white,
        shadowColor: "#042826",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
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
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 8,
        height: 22,
    },
    weekDates: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 8,
        height: 36,
    },
    dayContainer: {
        width: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    dateContainer: {
        width: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    dayText: {
        fontSize: 12,
        color: Colors.grayScale200,
    },
    dateText: {
        fontSize: 16,
        color: Colors.grayScale600,
    },
    currentDateText: {
        backgroundColor: Colors.primary300,
        color: Colors.white,
        borderRadius: 15,
        overflow: "hidden",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 30,
    },
});

export default Calendar;
