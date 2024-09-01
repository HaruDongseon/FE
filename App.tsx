import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Router from '@/routes/Router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Router />
    </SafeAreaProvider>
  );
}
