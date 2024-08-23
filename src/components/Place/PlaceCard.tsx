import Colors from "@/styles/Color";
import { GOOGLE_API_KEY } from "@env";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import Icon from "../icon/Common";

interface PlaceCardProps {
    onPress: () => void;
    imageUrl?: string;
    displayName: string;
    address: string;
}

const PlaceCard: React.FC<Partial<PlaceCardProps>> = ({
    onPress,
    imageUrl,
    displayName,
    address,
}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                {imageUrl ? (
                    <Image
                        source={{
                            uri: `https://places.googleapis.com/v1/${imageUrl}/media?maxHeightPx=400&maxWidthPx=400&key=${GOOGLE_API_KEY}`,
                        }}
                        style={styles.photo}
                    />
                ) : (
                    <View style={styles.emptyContainer}>
                        <Icon type="Lock" />
                    </View>
                )}
            </Pressable>
            <View style={styles.horizontalContainer}>
                <Pressable onPress={onPress}>
                    <View style={styles.textContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.displayName}
                        >
                            {displayName}
                        </Text>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={styles.address}
                        >
                            {address}
                        </Text>
                    </View>
                </Pressable>
                <Icon type="SharingL" />
            </View>
        </View>
    );
};

export default PlaceCard;

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 165,
        borderRadius: 16,
        backgroundColor: Colors.white,
        padding: 16,
    },
    emptyContainer: {
        width: 288,
        height: 77,
        backgroundColor: Colors.grayScale25,
        justifyContent: "center",
        alignItems: "center",
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    photo: {
        width: 288,
        height: 77,
        borderRadius: 4,
        resizeMode: "cover",
    },
    textContainer: {
        maxWidth: 204,
    },
    displayName: {
        color: Colors.grayScale700,
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 4,
    },
    address: {
        color: Colors.grayScale600,
        fontSize: 14,
        lineHeight: 20,
    },
});
