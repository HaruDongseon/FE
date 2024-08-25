import { SNSType } from '@/components/Button/LoginButton';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { FC } from 'react';

export enum RouteName {
  Root = 'Root',
  Mypage = 'Mypage',
  Mainpage = 'Mainpage',
  HomeStack = 'HomeStack',
  MakingPage = 'MakingPage',
  CalendarPage = 'CalendarPage',
  Home = 'Home',
  SearchPage = 'SearchPage',
}

export type RouteParamList = {
  [RouteName.Root]: undefined;
  [RouteName.Mypage]: {
    snsType: SNSType;
  };
  [RouteName.Mainpage]: undefined;
  [RouteName.HomeStack]: undefined;
  [RouteName.MakingPage]: {
    date: string;
  };
  [RouteName.CalendarPage]: undefined;
  [RouteName.Home]: undefined;
  [RouteName.SearchPage]: undefined;
};

export type Screen<RouteName extends keyof RouteParamList> = FC<
  StackScreenProps<RouteParamList, RouteName>
>;

export type Tab<
  RouteName extends keyof RouteParamList,
  NavigatorID extends string | undefined = undefined,
> = FC<BottomTabScreenProps<RouteParamList, RouteName, NavigatorID>>;
