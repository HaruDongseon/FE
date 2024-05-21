import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@/pages/Home";
import { RouteName, RouteParamList, Tab } from "@/types/route";

const Stack = createStackNavigator<RouteParamList>();

const HomeStack: Tab<RouteName.HomeStack> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RouteName.Home}
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
