import KakaoLogin from "@/components/Auth/KakaoLogin";
import React, { useState } from "react";
import { View, Button } from "react-native";

const Login = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Kakao 로그인"
                onPress={() => setLoginVisible(true)}
            />
            {loginVisible && <KakaoLogin setLoginVisible={setLoginVisible} />}
        </View>
    );
};

export default Login;
