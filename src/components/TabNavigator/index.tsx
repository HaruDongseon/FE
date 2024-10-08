import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mypage from '@/pages/Mypage';
import Mainpage from '@/pages/Mainpage';
import Icon, { IconType } from '@/components/icon/Common';
import Colors from '@/styles/Color';
import HomeStack from '../StackNavigator';
import { Pressable } from 'react-native';
import MakingPage from '@/pages/Makingpage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Calendarpage from '@/pages/Calendarpage';
import { RouteName, RouteParamList } from '@/types/route';

const Tab = createBottomTabNavigator<RouteParamList>();

function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName={RouteName.HomeStack}
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          height: 44 + insets.top,
        },
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 16,
          color: Colors.grayScale600,
        },
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          >
            <Icon type="Before1LineM" />
          </Pressable>
        ),
        tabBarStyle: {
          height: insets.bottom + 56,
        },
        tabBarIcon: () => {
          let iconName = null;
          switch (route.name) {
            case RouteName.Mainpage:
              iconName = 'NVHaruM' as IconType;
              break;
            case RouteName.Mypage:
              iconName = 'NVMypageM' as IconType;
              break;
            case RouteName.SearchPage:
              iconName = 'SearchM' as IconType;
              break;
            default:
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
        name={RouteName.HomeStack}
        component={HomeStack}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={RouteName.Mainpage}
        component={Mainpage}
        options={{ headerShown: false, title: '홈' }}
      />
      <Tab.Screen
        name={RouteName.Mypage}
        component={Mypage}
        options={{
          title: '내 정보',
          tabBarStyle: { display: 'none' },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name={RouteName.MakingPage}
        component={MakingPage}
        options={{
          title: '나의 하루동선',
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name={RouteName.CalendarPage}
        component={Calendarpage}
        options={{
          title: '날짜 등록',
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
