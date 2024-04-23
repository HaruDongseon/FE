import Colors from "@/styles/Color";
import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { CalendarList } from "react-native-calendars";

const screenWidth = Dimensions.get("window").width;

const todayDate = new Date().toISOString().split("T")[0];

const CalendarVertical = () => {
    const [currentMonth, setCurrentMonth] = useState(todayDate);
    const [selectedDate, setSelectedDate] = useState(todayDate);

    const handleScroll = (event: {
        nativeEvent: { contentOffset: { y: any } };
    }) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = currentOffset > 0 ? "next" : "previous";
        changeMonth(direction);
    };

    const changeMonth = (direction: string) => {
        let newDate = new Date(currentMonth);
        if (direction === "next") {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setMonth(newDate.getMonth() - 1);
        }
        setCurrentMonth(newDate.toISOString().split("T")[0]);
    };

    const onDayPress = (day: { dateString: React.SetStateAction<string> }) => {
        setSelectedDate(day.dateString);
    };

    const getMarkedDates = () => {
        return {
            [todayDate]: {
                selected: true,
                selectedColor:
                    todayDate === selectedDate
                        ? Colors.primary300
                        : Colors.grayScale75,
                selectedTextColor:
                    todayDate === selectedDate
                        ? Colors.white
                        : Colors.grayScale600,
            },
            [selectedDate]: {
                selected: true,
                selectedColor: Colors.primary300,
                selectedTextColor: Colors.white,
            },
        };
    };

    return (
        <ScrollView
            horizontal
            pagingEnabled
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            style={{ width: screenWidth }}
        >
            <CalendarList
                current={currentMonth}
                monthFormat={"yy년 M월"}
                scrollEnabled
                showScrollIndicator={false}
                pastScrollRange={50 * 12}
                futureScrollRange={50 * 12}
                markedDates={getMarkedDates()}
                onDayPress={onDayPress}
            />
        </ScrollView>
    );
};

export default CalendarVertical;
