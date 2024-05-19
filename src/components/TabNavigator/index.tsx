import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mypage from "@/pages/Mypage";
import Mainpage from "@/pages/Mainpage";
import Icon, { IconType } from "@/components/icon/Common";
import Colors from "@/styles/Color";
import HomeStack from "../StackNavigator";
import { TouchableOpacity } from "react-native";
import MakingPage from "@/pages/Makingpage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Calendarpage from "@/pages/Calendarpage";
import Searchpage from "@/pages/Searchpage";

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            backBehavior="history"
            initialRouteName="HomeStack"
            screenOptions={({ route, navigation }) => ({
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerStyle: {
                    height: 44 + insets.top,
                },
                headerTitleStyle: {
                    fontWeight: "500",
                    fontSize: 16,
                    color: Colors.grayScale600,
                },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 20 }}
                    >
                        <Icon type="Before1LineM" />
                    </TouchableOpacity>
                ),
                tabBarStyle: {
                    height: insets.bottom + 56,
                },
                tabBarIcon: () => {
                    let iconName = null;
                    if (route.name === "Mainpage") {
                        iconName = "NVHaruM" as IconType;
                    } else if (route.name === "Mypage") {
                        iconName = "NVMypageM" as IconType;
                    } else if (route.name === "Searchpage") {
                        iconName = "SearchM" as IconType;
                    } else {
                        return null;
                    }
                    return <Icon type={iconName} />;
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    marginBottom: 8,
                },
                tabBarIconStyle: {},
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
                name="Searchpage"
                component={Searchpage}
                options={{ headerShown: false, title: "검색" }}
            />
            <Tab.Screen
                name="Mypage"
                component={Mypage}
                options={{
                    title: "내 정보",
                    tabBarStyle: { display: "none" },
                    headerTitleAlign: "center",
                }}
            />
            <Tab.Screen
                name="Makingpage"
                component={MakingPage}
                options={{
                    title: "나의 하루동선",
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
                }}
            />
            <Tab.Screen
                name="Calendarpage"
                component={Calendarpage}
                options={{
                    title: "날짜 등록",
                    tabBarButton: () => null,
                    tabBarStyle: { display: "none" },
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;
