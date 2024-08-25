import { RouteName, RouteParamList } from '@/types/route';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import TabNavigator from './tabRoutes';

const navigationContainerRef = createNavigationContainerRef<RouteParamList>();

const Router = () => {
  const routeNameRef = useRef<string | null>(null);

  const handleReady = useCallback(() => {
    if (!navigationContainerRef) return;

    routeNameRef.current =
      navigationContainerRef.getCurrentRoute()?.name ?? null;
  }, []);

  const handleStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName =
      navigationContainerRef.getCurrentRoute()?.name ?? null;

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
    }
  }, []);

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      onReady={handleReady}
      onStateChange={handleStateChange}
      //   linking={{
      //     prefixes: linkingPrefixes,
      //     config: {
      //       initialRouteName: RouteName.SPLASH,
      //       screens: linkingScreens,
      //     },
      //   }}
      //   fallback={<LoadingAnimation loading />}
      //   theme={theme}
    >
      <TabNavigator />
      {/* <AuthProvider />
      <ApiErrorHandler />
      <NotificationEventHandler />
      <PortalProvider>
        <StackNavigator />
        <PopupContainer />
        <LoadingContainer />
        <Toaster />
        <PurchaseModals />
        <ATTModal />
      </PortalProvider> */}
    </NavigationContainer>
  );
};

export default Router;
