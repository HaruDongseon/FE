import Input from "@/components/Input";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Colors from "@/styles/Color";

const Searchpage: React.FC = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input
                        size={"M"}
                        placeholder={"장소를 검색하세요"}
                        iconPosition={"both"}
                    />
                </View>
                <View style={styles.firstSection}>
                    <Text style={styles.headerText}>최근 검색 장소</Text>
                    <Text style={styles.subText}>최근 검색어가 없습니다.</Text>
                </View>
                <View style={styles.secondSection}>
                    <Text style={styles.headerText}>보관 장소</Text>
                    <Text style={styles.subText}>보관 장소가 없습니다.</Text>
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default Searchpage;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    inputContainer: {
        paddingVertical: 16,
    },
    firstSection: {
        marginTop: 8,
    },
    secondSection: {
        marginTop: 44,
    },
    headerText: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: Colors.grayScale800,
        marginBottom: 16,
    },
    subText: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 20,
        color: Colors.grayScale300,
    },
});
