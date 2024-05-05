import Colors from "@/styles/Color";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FrameProps {
    title: string;
    children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ title, children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.childrenContainer}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: 40,
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.grayScale400,
        width: 52,
        marginRight: 16,
    },
    childrenContainer: {
        flex: 1,
        flexDirection: "row",
        columnGap: 8,
    },
});

export default Frame;
