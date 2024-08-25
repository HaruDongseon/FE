import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from '@/components/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Root: undefined;
  Mypage: undefined;
  Mainpage: undefined;
  HomeStack: undefined;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
