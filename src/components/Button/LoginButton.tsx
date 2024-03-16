import Colors from "@/styles/Color";
import React, { ReactNode } from "react";
import {
    TouchableOpacity,
    Text,
    ViewStyle,
    StyleSheet,
    View,
} from "react-native";
import Google from "../icon/SNS/Google";
import Naver from "../icon/SNS/Naver";
import Kakao from "../icon/SNS/Kakao";

interface LoginButtonProps {
    text: string;
    type: "KAKAO" | "NAVER" | "GOOGLE";
    style?: ViewStyle;
    textStyle?: ViewStyle;
}

const LoginButton: React.FC<LoginButtonProps> = ({
    text,
    type,
    style,
    textStyle,
}) => {
    let IconComponent = null;
    switch (type) {
        case "KAKAO":
            IconComponent = Kakao;
            break;
        case "NAVER":
            IconComponent = Naver;
            break;
        case "GOOGLE":
            IconComponent = Google;
            break;
        default:
            break;
    }

    return (
        <TouchableOpacity style={[styles.container, style]}>
            {IconComponent && <IconComponent />}
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default LoginButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
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
        marginLeft: 4,
    },
});
