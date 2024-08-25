import React, { memo } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteName, RouteParamList, Tab } from '@/types/route';
import LoginScreen from '@/screens/LoginScreen';

const Stack = createStackNavigator<RouteParamList>();

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'screen',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      freezeOnBlur: true,
    }}
  >
    <Stack.Screen
      name={RouteName.Login}
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default memo(LoginStack);
