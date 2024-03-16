import React, { SetStateAction } from "react";
import { KAKAO_REST_API_KEY, REDIRECT_URI } from "@env";
import WebView from "react-native-webview";
import { StyleSheet, Modal } from "react-native";
import { SNSType } from "../Button/LoginButton";

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin: React.FC<{
    loginVisible: SNSType | null;
    setLoginVisible: React.Dispatch<SetStateAction<SNSType | null>>;
}> = ({ loginVisible, setLoginVisible }) => {
    const getCode = (target: string) => {
        const exp = "code=";
        const condition = target.indexOf(exp);
        if (condition !== -1) {
            const requestCode = target.substring(condition + exp.length);
            console.log("code = ", requestCode);
            setLoginVisible(null);
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
            visible={loginVisible === SNSType.KAKAO}
            animationType="slide"
            presentationStyle={"pageSheet"}
            onRequestClose={() => setLoginVisible(null)}
        >
            <WebView
                style={styles.webView}
                source={{
                    uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
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

export default KakaoLogin;

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
