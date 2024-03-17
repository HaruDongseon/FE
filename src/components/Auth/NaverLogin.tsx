import React, { SetStateAction } from "react";
import { REDIRECT_URI, NAVER_REST_API_KEY } from "@env";
import WebView from "react-native-webview";
import { SNSType } from "../Button/LoginButton";

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const NaverLogin: React.FC<{
    setLoginVisible: React.Dispatch<SetStateAction<SNSType | null>>;
}> = ({ setLoginVisible }) => {
    const getCode = (target: string) => {
        const exp = "oauth_token=";
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
    );
};

export default NaverLogin;
