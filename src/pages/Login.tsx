import KakaoLogin from "@/components/Auth/KakaoLogin";
import NaverLogin from "@/components/Auth/NaverLogin";
import React, { useState } from "react";
import { View, Button } from "react-native";

const Login = () => {
    const [kakaoLoginVisible, setKakaoLoginVisible] = useState(false);
    const [naverLoginVisible, setNaverLoginVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Kakao 로그인"
                onPress={() => setKakaoLoginVisible(true)}
            />
            <Button
                title="Naver 로그인"
                onPress={() => setNaverLoginVisible(true)}
            />
            {kakaoLoginVisible && (
                <KakaoLogin setLoginVisible={setKakaoLoginVisible} />
            )}
            {naverLoginVisible && (
                <NaverLogin setLoginVisible={setNaverLoginVisible} />
            )}
        </View>
    );
};

export default Login;
