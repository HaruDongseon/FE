import Colors from "@/styles/Color";
import { Text, View, StyleSheet } from "react-native";
import Icon from "../icon/Common";

interface PlaceNameButtonProps {
    name: string;
}

const PlaceNameButton: React.FC<PlaceNameButtonProps> = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Icon type="CancelS" />
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
