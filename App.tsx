import React, { useRef } from "react";
import {
    NavigationContainer,
    NavigationContainerRef,
} from "@react-navigation/native";

import TabNavigator from "@/components/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackParamList = {
    Root: undefined;
    Mypage: undefined;
    Mainpage: undefined;
    HomeStack: undefined;
};

export default function App() {
    const navigationRef =
        useRef<NavigationContainerRef<RootStackParamList>>(null);

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <TabNavigator navigationRef={navigationRef} />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
