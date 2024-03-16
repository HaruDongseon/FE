import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/homeTypes";
import LoginButton from "@/components/Button/LoginButton";
import Logo from "@/components/icon/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import Colors from "@/styles/Color";
import Kakao from "@/components/icon/SNS/Kakao";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

export const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Logo style={styles.logo} />
                <View style={styles.buttonContainer}>
                    <LoginButton
                        type={"KAKAO"}
                        text="KAKAO 로그인"
                        style={styles.button}
                    />
                    <LoginButton
                        type={"NAVER"}
                        text="NAVER 로그인"
                        style={styles.button}
                    />
                    <LoginButton
                        type={"GOOGLE"}
                        text="Google 로그인"
                        style={styles.button}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        position: "relative",
        alignItems: "center",
        flex: 1,
    },
    logo: {
        position: "absolute",
        top: 188,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 24,
        width: "100%",
        alignItems: "center",
    },
    button: {
        marginBottom: 10,
    },
});
