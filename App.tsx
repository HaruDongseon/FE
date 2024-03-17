import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    NavigationContainer,
    NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@/pages/Home";
import Mypage from "@/pages/Mypage";
import Before from "@/components/icon/General/Before";

export type RootStackParamList = {
    Home: undefined;
    Mypage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App({}) {
    const navigationRef =
        useRef<NavigationContainerRef<RootStackParamList>>(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigationRef.current?.goBack()}
                            style={{ marginLeft: 20 }}
                        >
                            <Before />
                        </TouchableOpacity>
                    ),
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Mypage"
                    component={Mypage}
                    options={{
                        title: "내 정보",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
