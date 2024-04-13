import Colors from "@/styles/Color";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from "../icon/Common";

interface AvatarProps {
    avatarUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl }) => {
    return (
        <View style={styles.circle}>
            {avatarUrl ? (
                <Image source={{ uri: avatarUrl }} style={styles.image} />
            ) : (
                <Icon type="PickOnL" />
            )}
            <View style={styles.innerCircle}>
                <Icon type="CameraR" />
            </View>
        </View>
    );
};

export default Avatar;

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
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
});
