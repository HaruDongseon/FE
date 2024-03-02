// screens/HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/homeTypes";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

export const Home: React.FunctionComponent<HomeScreenProps> = ({
    navigation,
}) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
};
