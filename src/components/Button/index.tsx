import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

type ButtonType = "filled" | "outline" | "text";
type ButtonSize = "l" | "m" | "r" | "s";
type ButtonColor = "Primary" | "Gray";
type IconPosition = "none" | "leading" | "trailing";
type ButtonState = "default" | "pressed" | "disabled";

interface ButtonProps {
    title: string;
    onPress: () => void;
    type: ButtonType;
    size: ButtonSize;
    color: ButtonColor;
    iconPosition?: IconPosition;
    state?: ButtonState;
    icon?: JSX.Element; // Icon component
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    type,
    size,
    color,
    iconPosition = "none",
    state = "default",
    icon,
}) => {
    // Define dynamic styles based on props
    const dynamicStyles = StyleSheet.create({
        button: {
            ...baseStyles.button,
            ...sizeStyles[size],
            ...(type === "filled" && {
                backgroundColor: colorStyles[color].background,
            }),
            ...(type === "outline" && {
                borderWidth: 1,
                borderColor: colorStyles[color].border,
            }),
            ...(type === "text" && {}),
            ...(state === "disabled" && { opacity: 0.5 }),
        },
        text: {
            color: type === "text" ? colorStyles[color].text : "white",
        },
        iconStyle: {
            marginRight: iconPosition === "leading" ? 8 : 0,
            marginLeft: iconPosition === "trailing" ? 8 : 0,
        },
    });

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={state === "disabled"}
            style={dynamicStyles.button}
        >
            <View style={baseStyles.flexRow}>
                {icon && iconPosition === "leading" && (
                    <View style={dynamicStyles.iconStyle}>{icon}</View>
                )}
                <Text style={dynamicStyles.text}>{title}</Text>
                {icon && iconPosition === "trailing" && (
                    <View style={dynamicStyles.iconStyle}>{icon}</View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const baseStyles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
});

const sizeStyles: Record<ButtonSize, ViewStyle> = {
    l: {
        height: 56,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    m: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    r: {
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    s: {
        height: 32,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
};

const colorStyles: Record<
    ButtonColor,
    { background: string; border: string; text: string }
> = {
    Primary: { background: "blue", border: "blue", text: "white" },
    Gray: { background: "gray", border: "gray", text: "black" },
};

export default Button;
