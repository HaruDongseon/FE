import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../icon/Common";
import Colors from "@/styles/Color";

interface ToggleComponentProps {
    title: string;
    expanded: boolean;
    handlePress: () => void;
}

const Toggle: React.FC<ToggleComponentProps> = ({
    title,
    expanded,
    handlePress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.title}>{title}</Text>
            <Icon type={expanded ? "Up1LineR" : "Down1LineR"} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 52,
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: "#F0F2F2",
        opacity: 1,
    },
    title: {
        fontSize: 16,
        color: Colors.grayScale600,
        fontWeight: "700",
    },
});

export default Toggle;
