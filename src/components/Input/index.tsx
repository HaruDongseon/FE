import React, { Dispatch, SetStateAction, useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
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
    onChangeText: Dispatch<SetStateAction<string>>;
    iconPosition?: IconPosition;
    inputState?: InputState;
    errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
    size,
    placeholder,
    iconPosition = "default",
    inputState = "default",
    onChangeText,
    errorMessage,
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
        isFocused && inputState !== "error" && styles.focused,
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
                    onChangeText={onChangeText}
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
                {iconPosition === "both" && inputState !== "error" ? (
                    <Icon
                        type="TextCancelR"
                        style={[styles.icon, styles.iconTrailing]}
                    />
                ) : null}
                {iconPosition === "both" && inputState === "error" ? (
                    <Icon
                        type="MessageErrorR"
                        style={[styles.icon, styles.iconTrailing]}
                    />
                ) : null}
            </View>
            {inputState === "error" && errorMessage && (
                <Text style={styles.errorText}>{errorMessage}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "column",
        width: "100%",
    },
    inputContainer: {
        position: "relative",
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
        right: 16,
    },
    error: {
        backgroundColor: Colors.feedbackR25,
        borderWidth: 0,
        color: Colors.feedbackR200,
    },
    disabled: {
        backgroundColor: "#f2f2f2",
    },
    focused: {
        borderColor: Colors.grayScale75,
        borderWidth: 1,
    },
    errorText: {
        color: Colors.feedbackR300,
        fontSize: 12,
        marginTop: 2,
    },
});

export default Input;
