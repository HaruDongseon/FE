import React, { useState } from "react";
import LoginButton, { SNSType } from "@/components/Button/LoginButton";
import Logo from "@/components/icon/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import Colors from "@/styles/Color";
import KakaoLogin from "@/components/Auth/KakaoLogin";
import NaverLogin from "@/components/Auth/NaverLogin";
import { RouteName, Screen } from "@/types/route";

export const Home: Screen<RouteName.Home> = () => {
    const [loginVisible, setLoginVisible] = useState<SNSType | null>(null);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Logo style={styles.logo} />
                <View style={styles.buttonContainer}>
                    <LoginButton
                        type={SNSType.KAKAO}
                        text="KAKAO 로그인"
                        style={styles.button}
                        onPress={() => setLoginVisible(SNSType.KAKAO)}
                    />
                    <LoginButton
                        type={SNSType.NAVER}
                        text="NAVER 로그인"
                        style={styles.button}
                        onPress={() => setLoginVisible(SNSType.NAVER)}
                    />
                    <LoginButton
                        type={SNSType.GOOGLE}
                        text="Google 로그인"
                        style={styles.button}
                        onPress={() => setLoginVisible(SNSType.GOOGLE)}
                    />
                </View>
                <KakaoLogin
                    loginVisible={loginVisible}
                    setLoginVisible={setLoginVisible}
                />
                <NaverLogin
                    loginVisible={loginVisible}
                    setLoginVisible={setLoginVisible}
                />
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
        bottom: 96,
        alignItems: "center",
    },
    button: {
        marginBottom: 10,
    },
});
