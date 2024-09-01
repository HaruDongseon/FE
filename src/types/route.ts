import { SNSType } from '@/components/Button/LoginButton';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';

export enum RouteName {
  Splash = 'Splash',

  LoginStack = 'LoginStack',
  Login = 'Login',

  HomeStack = 'HomeStack',
  Home = 'Home',
  Create = 'Create',
  Calendar = 'Calendar',

  Mypage = 'Mypage',
  SearchPage = 'SearchPage',
}

export type RouteParamList = {
  [RouteName.Splash]: undefined;

  [RouteName.LoginStack]: undefined;
  [RouteName.Login]: undefined;

  [RouteName.HomeStack]: undefined;
  [RouteName.Mypage]: {
    snsType: SNSType;
  };
  [RouteName.Home]: undefined;
  [RouteName.Create]: {
    date: string;
  };
  [RouteName.Calendar]: undefined;
  [RouteName.SearchPage]: undefined;
};

export type Screen<RouteName extends keyof RouteParamList> = FC<
  StackScreenProps<RouteParamList, RouteName>
>;

export type Tab<
  RouteName extends keyof RouteParamList,
  NavigatorID extends string | undefined = undefined,
> = FC<BottomTabScreenProps<RouteParamList, RouteName, NavigatorID>>;
