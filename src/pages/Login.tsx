import React, { useState } from "react";
import { View, Button } from "react-native";
import { WebView } from "react-native-webview";

const REST_API_KEY = "5f9dd5b73e2f948b6654fcc79a476b5a";
const REDIRECT_URI = "http://172.30.1.1:8081/Home";

const Login = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const handleLogin = () => {
        setLoginVisible(true);
    };

    const getCode = (target: string) => {
        const exp = "code=";
        const condition = target.indexOf(exp);
        if (condition !== -1) {
            const requestCode = target.substring(condition + exp.length);
            console.log("code = ", requestCode);
        }
    };

    const handleNavigationStateChange = (navState: {
        url: string | string[];
    }) => {
        // 로그인 성공 시 처리
        if (navState.url.includes("your_redirect_uri")) {
            // 여기에서 토큰을 가져와 처리할 수 있습니다.
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Kakao 로그인" onPress={handleLogin} />
            {loginVisible && (
                <WebView
                    style={{ flex: 1 }}
                    source={{
                        uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
                    }}
                    onMessage={(event) => {
                        const data = event.nativeEvent.url;
                        getCode(data);
                    }}
                    onNavigationStateChange={handleNavigationStateChange}
                />
            )}
        </View>
    );
};

export default Login;
