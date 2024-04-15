import React, { Dispatch, SetStateAction } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "../icon/Common";
import Colors from "@/styles/Color";
import { uploadUserProfileImage } from "@/apis/member";

interface AvatarProps {
    avatarUrl: string;
    setAvatar: Dispatch<SetStateAction<string>>;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl, setAvatar }) => {
    const handleSelectImage = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "권한 필요",
                "이 기능을 사용하려면 카메라 롤 권한을 허용해주세요",
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (result.canceled) {
            return null;
        }

        const formData = new FormData();
        formData.append(
            "image",
            new File([result.assets[0].uri], "image.png", {
                type: "image/png" || "image/jpg" || "image/jpeg",
            }),
        );
        const { imageUrl } = await uploadUserProfileImage(formData);
        setAvatar(imageUrl);
    };

    return (
        <View style={styles.circle}>
            {avatarUrl ? (
                <Image source={{ uri: avatarUrl }} style={styles.image} />
            ) : (
                <Icon type="PickOnL" />
            )}
            <TouchableOpacity
                onPress={handleSelectImage}
                style={styles.innerCircle}
            >
                <Icon type="CameraR" />
            </TouchableOpacity>
        </View>
    );
};

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
        borderRadius: 12,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.grayScale75,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
});

export default Avatar;
