import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    TextInputProps,
} from "react-native";
import Icon from "../icon/Common";
import Colors from "@/styles/Color";

type InputSize = "L" | "M";

type IconPosition = "default" | "leading" | "trailing" | "both";

type InputState = "default" | "touch" | "pressed" | "error" | "disabled";

interface InputProps extends TextInputProps {
    size: InputSize;
    placeholder: string;
    iconPosition?: IconPosition;
    inputState?: InputState;
}

const Input: React.FC<InputProps> = ({
    size,
    placeholder,
    iconPosition = "default",
    inputState = "default",
    ...textInputProps
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const inputStyles = [
        styles.input,
        size === "L" ? styles.large : styles.medium,
        inputState === "error" && styles.error,
        inputState === "disabled" && styles.disabled,
        isFocused && styles.focused,
        (iconPosition === "leading" || iconPosition === "both") &&
            styles.paddingLeft,
        (iconPosition === "trailing" || iconPosition === "both") &&
            styles.paddingRight,
    ];

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.inputContainer,
                    iconPosition !== "default" && styles.withIcon,
                ]}
            >
                {iconPosition === "leading" || iconPosition === "both" ? (
                    <Icon
                        type="SearchM"
                        style={[styles.icon, styles.iconLeading]}
                    />
                ) : null}
                <TextInput
                    {...textInputProps}
                    placeholder={placeholder}
                    style={inputStyles}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    editable={inputState !== "disabled"}
                />
                {iconPosition === "trailing" ? (
                    <Icon
                        type="SearchM"
                        style={[styles.icon, styles.iconTrailing]}
                    />
                ) : null}
                {iconPosition === "both" ? (
                    <Icon
                        type="TextCancelR"
                        style={[styles.icon, styles.iconTrailing]}
                    />
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    inputContainer: {
        position: "relative",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    withIcon: {
        justifyContent: "space-between",
    },
    input: {
        flex: 1,
        borderWidth: 0,
        backgroundColor: Colors.grayScale25,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    paddingLeft: {
        paddingLeft: 42,
    },
    paddingRight: {
        paddingRight: 38,
    },
    large: {
        height: 56,
    },
    medium: {
        height: 40,
    },
    icon: {
        position: "absolute",
        zIndex: 2,
    },
    iconLeading: {
        left: 14,
    },
    iconTrailing: {
        right: 20,
    },
    error: {
        borderColor: "red",
    },
    disabled: {
        backgroundColor: "#f2f2f2",
    },
    focused: {
        borderColor: Colors.grayScale75,
        borderWidth: 1,
    },
});

export default Input;
