// screens/HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/homeTypes";
import LoginButton from "@/components/Button/LoginButton";
import Logo from "@/components/icon/Logo/Logo";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

export const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <SafeAreaView>
            <Logo />
            <LoginButton text="KAKAO 로그인" />
        </SafeAreaView>
    );
};
