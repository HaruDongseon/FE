import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    TouchableOpacity,
} from "react-native";
import Colors from "@/styles/Color";
import Icon from "../icon/Common";

interface CalendarHorizontalProps {
    setShowCalendar: Dispatch<SetStateAction<boolean>>;
}

const getWeekDates = (baseDate: string | number | Date) => {
    const startOfWeek = new Date(baseDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    return Array.from({ length: 7 }, (_, index) => {
        const day = new Date(startOfWeek);
        day.setDate(day.getDate() + index);
        return day;
    });
};

const CalendarHorizontal: React.FC<CalendarHorizontalProps> = ({
    setShowCalendar,
}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const today = new Date();
    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: position.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    setCurrentDate((prevDate) => {
                        const newDate = new Date(prevDate);
                        return new Date(newDate.setDate(newDate.getDate() - 7));
                    });
                } else if (gestureState.dx < -50) {
                    setCurrentDate((prevDate) => {
                        const newDate = new Date(prevDate);
                        return new Date(newDate.setDate(newDate.getDate() + 7));
                    });
                }
                position.setValue({ x: 0, y: 0 });
            },
        }),
    ).current;

    const week = getWeekDates(currentDate);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon type="AddL" />
                <Text style={styles.monthYearText}>
                    {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
                </Text>
                <TouchableOpacity onPress={() => setShowCalendar(true)}>
                    <Icon type="CalendarL" />
                </TouchableOpacity>
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
            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.weekView, position.getLayout()]}
            >
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
            </Animated.View>
        </View>
    );
};

const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        shadowColor: "#042826",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        height: 112,
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
    weekView: {
        height: 36,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 8,
    },
    dateContainer: {
        width: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    dayContainer: {
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

export default CalendarHorizontal;
