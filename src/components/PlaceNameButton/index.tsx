import Colors from "@/styles/Color";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Icon from "../icon/Common";
import { removeSearchedPlace } from "@/apis/searchedPlaces";

interface PlaceNameButtonProps {
    name: string;
    id: number;
    onRemove: () => void;
}

const PlaceNameButton: React.FC<PlaceNameButtonProps> = ({
    name,
    id,
    onRemove,
}) => {
    const handleRemove = async () => {
        try {
            await removeSearchedPlace(id);
            onRemove();
        } catch (error) {
            console.error("Failed to remove searched place:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Pressable onPress={handleRemove}>
                <Icon type="CancelS" />
            </Pressable>
        </View>
    );
};

export default PlaceNameButton;

const styles = StyleSheet.create({
    container: {
        height: 32,
        borderRadius: 24,
        alignItems: "center",
        paddingHorizontal: 6,
        backgroundColor: Colors.grayScale50,
        flexDirection: "row",
        alignSelf: "flex-start",
        marginRight: 6,
    },
    name: {
        fontSize: 14,
        color: Colors.grayScale800,
        marginRight: 4,
    },
});
