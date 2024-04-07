import Avatar from "@/components/Avatar/Avatar";
import Colors from "@/styles/Color";
import { StyleSheet, View } from "react-native";

const Mypage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar />
            </View>
        </View>
    );
};

export default Mypage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
    },
    avatarContainer: {
        marginTop: 40,
    },
});
