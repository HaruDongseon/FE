import Colors from "@/styles/Color";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "../icon/Common";

interface PlaceProps {
    id: string;
    name: string;
    address: string;
    primaryType?: string;
}

const Place: React.FC<PlaceProps> = ({ id, name, address, primaryType }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon type="LocationM" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text
                    style={styles.address}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {address}
                </Text>
            </View>
            <View style={styles.typeContainer}>
                <Text
                    style={styles.primaryType}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {primaryType}
                </Text>
            </View>
        </View>
    );
};

export default Place;

const styles = StyleSheet.create({
    container: {
        height: 70,
        paddingVertical: 12,
        gap: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayScale50,
        flexDirection: "row",
    },
    iconContainer: {
        marginRight: 8,
    },
    textContainer: {
        flex: 1,
    },
    typeContainer: {
        marginLeft: "auto",
    },
    name: {
        color: Colors.grayScale600,
        fontSize: 18,
        height: 26,
    },
    address: {
        color: Colors.grayScale400,
        fontSize: 14,
    },
    primaryType: {
        color: Colors.grayScale400,
        fontSize: 12,
    },
});
