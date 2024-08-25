import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mypage from '@/pages/Mypage';
import Icon, { IconType } from '@/components/icon/Common';
import Colors from '@/styles/Color';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteName, RouteParamList } from '@/types/route';
import LoginStack from './stacks/Login';
import HomeStack from './stacks/Home';
import useAuthorized from '@/hooks/useAuthorized';

const Tab = createBottomTabNavigator<RouteParamList>();

const UNAUTHORIZED_SCREENS = (
  <Tab.Screen
    name={RouteName.LoginStack}
    component={LoginStack}
    options={{
      tabBarStyle: { display: 'none' },
      headerShown: false,
    }}
  />
);

const AUTHORIZED_SCREENS = (
  <>
    <Tab.Screen
      name={RouteName.HomeStack}
      component={HomeStack}
      options={{ headerShown: false, title: '홈' }}
    />
    {/* 검색 스택 필요
    보관함 스택 필요 */}
    <Tab.Screen
      name={RouteName.Mypage}
      component={Mypage}
      options={{
        title: '내 정보',
        tabBarStyle: { display: 'none' },
        headerTitleAlign: 'center',
      }}
    />
  </>
);

function TabNavigator() {
  const insets = useSafeAreaInsets();

  const authorized = useAuthorized();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName={RouteName.Splash}
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
            case RouteName.Home:
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
      {authorized ? AUTHORIZED_SCREENS : UNAUTHORIZED_SCREENS}
    </Tab.Navigator>
  );
}

export default TabNavigator;
