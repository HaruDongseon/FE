import Colors from "@/styles/Color";
import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

const screenWidth = Dimensions.get("window").width;

const todayDate = new Date().toISOString().split("T")[0];

LocaleConfig.locales["ko"] = {
    monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
    ],
    monthNamesShort: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ],
    dayNames: [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    today: "오늘",
};
LocaleConfig.defaultLocale = "ko";

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
                theme={{
                    textMonthFontSize: 16,
                    textMonthFontWeight: "700",
                    monthTextColor: Colors.grayScale700,
                    textDayFontWeight: "500",
                    textDayFontSize: 14,
                    dayTextColor: Colors.grayScale600,
                    textDayHeaderFontSize: 12,
                    textDayHeaderFontWeight: "500",
                }}
            />
        </ScrollView>
    );
};

export default CalendarVertical;
