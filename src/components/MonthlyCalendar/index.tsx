import Colors from "@/styles/Color";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Calendar } from "react-native-calendars";

interface MonthlyCalendarType {
    currentDate: Date;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
}

const todayDate = new Date().toISOString().split("T")[0];

const MonthlyCalendar: React.FC<MonthlyCalendarType> = ({
    currentDate,
    setCurrentDate,
}) => {
    const [selectedDate, setSelectedDate] = useState(todayDate);

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

    const onDayPress = (day: { dateString: React.SetStateAction<string> }) => {
        setSelectedDate(day.dateString);
    };

    return (
        <Calendar
            enableSwipeMonths={true}
            current={currentDate.toString()}
            hideArrows={true}
            onMonthChange={(month) => {
                setCurrentDate(new Date(month.dateString));
            }}
            onDayPress={onDayPress}
            markedDates={getMarkedDates()}
            renderHeader={() => null}
            hideExtraDays={true}
        />
    );
};

export default MonthlyCalendar;
