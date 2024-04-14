import Calendar from "@/components/Calendar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet, View } from "react-native";

const Mainpage: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Calendar />
        </SafeAreaView>
    );
};

export default Mainpage;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
