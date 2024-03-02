import KakaoLogin from "@/components/Auth/KakaoLogin";
import React, { useState } from "react";
import { View, Button } from "react-native";

const Login = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const handleLogin = () => {
        setLoginVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Kakao 로그인" onPress={handleLogin} />
            {loginVisible && <KakaoLogin />}
        </View>
    );
};

export default Login;
