import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mypage from "@/pages/Mypage";
import Mainpage from "@/pages/Mainpage";
import Icon, { IconType } from "@/components/icon/Common";
import Colors from "@/styles/Color";
import HomeStack from "../StackNavigator";
import { TouchableOpacity } from "react-native";
import { NavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

const Tab = createBottomTabNavigator();

type TabNavigatorProps = {
    navigationRef: React.RefObject<NavigationContainerRef<RootStackParamList>>;
};

function TabNavigator({ navigationRef }: TabNavigatorProps) {
    return (
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
    );
}

export default TabNavigator;
