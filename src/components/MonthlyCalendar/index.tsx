import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, View } from "react-native";
import {
    GestureHandlerRootView,
    Swipeable,
} from "react-native-gesture-handler";

const MonthlyCalendar = () => {
    const [currentDate, setCurrentDate] = useState(
        new Date().toISOString().split("T")[0],
    );

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate.toISOString().split("T")[0]);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate.toISOString().split("T")[0]);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Swipeable
                onSwipeableLeftOpen={handleNextMonth}
                onSwipeableRightOpen={handlePrevMonth}
                renderLeftActions={() => <View />}
                renderRightActions={() => <View />}
            >
                <Calendar
                    current={currentDate}
                    onMonthChange={(month) => {
                        setCurrentDate(month.dateString);
                    }}
                />
            </Swipeable>
        </GestureHandlerRootView>
    );
};

export default MonthlyCalendar;
