import React, { SetStateAction } from "react";
import { REDIRECT_URI, NAVER_REST_API_KEY, NAVER_CLIENT_SECRET } from "@env";
import WebView from "react-native-webview";
import { SNSType } from "../Button/LoginButton";
import { Modal, StyleSheet } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { oauthLogin, convertNaverCodeToToken } from "@/apis/auth";
import * as SecureStore from "expo-secure-store";

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const NaverLogin: React.FC<{
    loginVisible: SNSType | null;
    setLoginVisible: React.Dispatch<SetStateAction<SNSType | null>>;
}> = ({ loginVisible, setLoginVisible }) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const getCode = async (target: string) => {
        const exp = "oauth_token=";
        const condition = target.indexOf(exp);
        if (condition !== -1) {
            const requestCode = target.substring(condition + exp.length);
            const token = await convertNaverCodeToToken({
                grant_type: "authorization_code",
                client_id: NAVER_REST_API_KEY,
                client_secret: NAVER_CLIENT_SECRET,
                code: requestCode,
                state: Math.random().toString(36).substring(3, 14),
            });
            const accessToken = await oauthLogin({
                loginType: "naver",
                token,
                deviceId: "123",
            });
            console.log(accessToken);
            await SecureStore.setItemAsync("accessToken", accessToken);

            setLoginVisible(null);
            navigation.navigate("Mypage", { snsType: SNSType.NAVER });
        }
    };

    const handleNavigationStateChange = (navState: {
        url: string | string[];
    }) => {
        if (navState.url.includes(REDIRECT_URI)) {
        }
    };

    return (
        <Modal
            visible={loginVisible === SNSType.NAVER}
            animationType="slide"
            presentationStyle={"pageSheet"}
            onRequestClose={() => setLoginVisible(null)}
        >
            <WebView
                style={{ flex: 1 }}
                source={{
                    uri: `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_REST_API_KEY}&response_type=code&redirect_uri=${REDIRECT_URI}&state=${Math.random()
                        .toString(36)
                        .substring(3, 14)}`,
                }}
                onMessage={(event) => {
                    const data = event.nativeEvent.url;
                    getCode(data);
                }}
                injectedJavaScript={runFirst}
                javaScriptEnabled={true}
                onNavigationStateChange={handleNavigationStateChange}
            />
        </Modal>
    );
};

export default NaverLogin;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    webView: {
        flex: 1,
    },
});
