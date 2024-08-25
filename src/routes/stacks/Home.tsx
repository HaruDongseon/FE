import React, { memo } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteName, RouteParamList, Tab } from '@/types/route';
import HomeScreen from '@/screens/home/HomeScreen';
import CreateScreen from '@/screens/home/CreateScreen';
import CalendarScreen from '@/screens/home/CalendarScreen';

const Stack = createStackNavigator<RouteParamList>();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      freezeOnBlur: true,
    }}
  >
    <Stack.Screen
      name={RouteName.Home}
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RouteName.Create}
      component={CreateScreen}
      options={{
        title: '나의 하루동선',
      }}
    />
    <Stack.Screen
      name={RouteName.Calendar}
      component={CalendarScreen}
      options={{
        title: '날짜 등록',
      }}
    />
  </Stack.Navigator>
);

export default memo(HomeStack);
