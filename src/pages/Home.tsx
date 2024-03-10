// screens/HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/homeTypes";
import LoginButton from "@/components/Button/LoginButton";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

export const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <LoginButton text="KAKAO 로그인" />
        </View>
    );
};
