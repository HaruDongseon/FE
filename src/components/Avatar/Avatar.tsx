import Colors from "@/styles/Color";
import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../icon/Common";

const Avatar = () => {
    return (
        <View style={styles.circle}>
            <Icon type="PickOnL" />
            <View style={styles.innerCircle}>
                <Icon type="CameraR" />
            </View>
        </View>
    );
};

export default Avatar;

// 스타일을 별도로 분리
const styles = StyleSheet.create({
    circle: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.grayScale25,
    },
    innerCircle: {
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        width: 24,
        height: 24,
        borderRadius: 24,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.grayScale75,
    },
});
