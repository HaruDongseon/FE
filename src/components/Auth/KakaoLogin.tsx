import React, { SetStateAction } from "react";
import { REST_API_KEY, REDIRECT_URI } from "@env";
import WebView from "react-native-webview";

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const KakaoLogin: React.FC<{
    setLoginVisible: React.Dispatch<SetStateAction<boolean>>;
}> = ({ setLoginVisible }) => {
    const getCode = (target: string) => {
        const exp = "code=";
        const condition = target.indexOf(exp);
        if (condition !== -1) {
            const requestCode = target.substring(condition + exp.length);
            console.log("code = ", requestCode);
            setLoginVisible(false);
        }
    };

    const handleNavigationStateChange = (navState: {
        url: string | string[];
    }) => {
        if (navState.url.includes(REDIRECT_URI)) {
        }
    };

    return (
        <WebView
            style={{ flex: 1 }}
            source={{
                uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
            }}
            onMessage={(event) => {
                const data = event.nativeEvent.url;
                getCode(data);
            }}
            injectedJavaScript={runFirst}
            javaScriptEnabled={true}
            onNavigationStateChange={handleNavigationStateChange}
        />
    );
};

export default KakaoLogin;
