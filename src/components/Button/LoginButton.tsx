import Colors from "@/styles/Color";
import React from "react";
import { TouchableOpacity, Text, ViewStyle, StyleSheet } from "react-native";

interface LoginButtonProps {
    text: string;
    style?: ViewStyle;
    textStyle?: ViewStyle;
}

const LoginButton: React.FC<LoginButtonProps> = ({
    text,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity style={[styles.container, style]}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        height: 56,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.gray200,
        gap: 4,
        backgroundColor: Colors.white,
    },
    text: {
        color: Colors.gray300,
    },
});
