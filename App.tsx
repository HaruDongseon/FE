import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
    NavigationContainer,
    NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/pages/Home";
import Mypage from "@/pages/Mypage";
import Mainpage from "@/pages/Mainpage";
import Icon, { IconType } from "@/components/icon/Common";
import Colors from "@/styles/Color";

export type RootStackParamList = {
    Root: undefined;
    Mypage: undefined;
    Mainpage: undefined;
    HomeStack: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    const navigationRef =
        useRef<NavigationContainerRef<RootStackParamList>>(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator
                initialRouteName="HomeStack"
                screenOptions={({ route }) => ({
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigationRef.current?.goBack()}
                            style={{ marginLeft: 20 }}
                        >
                            <Icon type="Before1LineM" />
                        </TouchableOpacity>
                    ),
                    tabBarStyle: {
                        height: 80,
                        boxShadow: "0px -2px 10px 0px #0428261A",
                    },
                    tabBarIcon: ({ focused }) => {
                        let iconName = null;
                        if (route.name === "Mainpage") {
                            iconName = "NVHaruM" as IconType;
                        } else if (route.name === "Mypage") {
                            iconName = "NVMypageM" as IconType;
                        } else {
                            return null;
                        }
                        return <Icon type={iconName} />;
                    },
                    tabBarLabelStyle: {
                        fontSize: 11,
                    },
                    tabBarIconStyle: {
                        marginBottom: 2,
                    },
                    tabBarActiveTintColor: Colors.primary300,
                    tabBarInactiveTintColor: Colors.grayScale200,
                })}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarButton: () => null,
                        tabBarStyle: { display: "none" },
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Mainpage"
                    component={Mainpage}
                    options={{ headerShown: false, title: "홈" }}
                />
                <Tab.Screen
                    name="Mypage"
                    component={Mypage}
                    options={{
                        title: "내 정보",
                        tabBarStyle: { display: "none" },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
