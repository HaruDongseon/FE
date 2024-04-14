import React, { useRef } from "react";
import {
    NavigationContainer,
    NavigationContainerRef,
} from "@react-navigation/native";

import TabNavigator from "@/components/TabNavigator";

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
        <NavigationContainer ref={navigationRef}>
            <TabNavigator navigationRef={navigationRef} />
        </NavigationContainer>
    );
}
