import { StyleSheet, Text, View } from "react-native";
import Icon from "../icon/Common";
import Colors from "@/styles/Color";

interface PlaceMovementProps {
    displayName: string;
    primaryTypeDisplayName?: string;
    idx: number;
}

const getColorByIndex = (idx: number) => {
    const colorMap = [
        Colors.secondary400, // 1
        Colors.secondary500, // 2
        Colors.secondary300, // 3
        Colors.secondary600, // 4
        Colors.secondary400, // 5
        Colors.secondary700, // 6
        Colors.secondary500, // 7
        Colors.secondary300, // 8
        Colors.secondary600, // 9
        Colors.secondary400, // 10
    ];
    return colorMap[idx % colorMap.length];
};

const PlaceMovement: React.FC<PlaceMovementProps> = ({
    displayName,
    primaryTypeDisplayName,
    idx,
}) => {
    const circleColor = getColorByIndex(idx);
    return (
        <View style={styles.container}>
            <View style={[styles.circle, { backgroundColor: circleColor }]}>
                <Text style={styles.circleText}>{idx + 1}</Text>
            </View>
            <View style={styles.placeContainer}>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.displayName}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {displayName}
                    </Text>
                    <Text style={styles.primaryTypeDisplayName}>
                        {primaryTypeDisplayName}
                    </Text>
                </View>
                <Icon type="Next1LineR" />
            </View>
            <Icon type="DeleteL" />
            <Icon type="SwitchL" />
        </View>
    );
};

export default PlaceMovement;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    placeContainer: {
        flexDirection: "row",
        width: 236,
        height: 64,
        borderWidth: 1,
        borderColor: Colors.grayScale25,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
    },
    circle: {
        width: 20,
        height: 20,
        padding: 1,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        maxWidth: 148,
    },
    displayName: {
        fontWeight: "500",
        color: Colors.grayScale800,
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 2,
    },
    primaryTypeDisplayName: {
        fontSize: 11,
        lineHeight: 14,
        color: Colors.grayScale300,
    },
    circleText: {
        color: Colors.white,
        fontSize: 12,
    },
});
