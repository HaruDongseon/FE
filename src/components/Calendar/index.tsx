import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import Colors from "@/styles/Color";
import Icon from "../icon/Common";

const getWeekDates = (baseDate: Date): Date[] => {
    const startOfWeek = new Date(
        baseDate.setDate(baseDate.getDate() - baseDate.getDay()),
    );
    return Array.from({ length: 7 }, (_, index) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + index);
        return day;
    });
};

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();
    const pagerRef = useRef<PagerView>(null);

    const getThreeWeeks = (date: Date) => [
        getWeekDates(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7),
        ),
        getWeekDates(
            new Date(date.getFullYear(), date.getMonth(), date.getDate()),
        ),
        getWeekDates(
            new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7),
        ),
    ];

    const weeks = getThreeWeeks(currentDate);

    const handlePageSelected = (e: any) => {
        const position = e.nativeEvent.position;
        if (position === 0) {
            setCurrentDate(
                (prev) => new Date(prev.setDate(prev.getDate() - 7)),
            );
        } else if (position === 2) {
            setCurrentDate(
                (prev) => new Date(prev.setDate(prev.getDate() + 7)),
            );
        }
        pagerRef.current?.setPageWithoutAnimation(1);
    };

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
            <PagerView
                ref={pagerRef}
                style={styles.pagerView}
                initialPage={1}
                onPageSelected={handlePageSelected}
            >
                {weeks.map((week, index) => (
                    <View key={index} style={styles.weekDates}>
                        {week.map((date, idx) => (
                            <View key={idx} style={styles.dateContainer}>
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
                ))}
            </PagerView>
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
        backgroundColor: Colors.white,
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
    pagerView: {
        height: 36,
    },
    weekDates: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 8,
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
