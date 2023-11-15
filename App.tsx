import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/home';
import {SchoolScreen} from './src/screens/school';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {TeamScreen} from './src/screens/team';
import {PlayerScreen} from './src/screens/player';
import {useColorScheme} from 'react-native';
import codePush from 'react-native-code-push';
import {Event} from './src/models/event';
import {EventScreen} from './src/screens/event';

export type RootStackParamList = {
  Home: undefined;
  School: {schoolId: string};
  Team: {teamId: string; schoolId: string};
  Player: {playerId: string; teamId: string; schoolId: string};
  Event: Event;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
};

function App(): JSX.Element {
  const theme = useColorScheme();
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="School" component={SchoolScreen} />
            <Stack.Screen name="Team" component={TeamScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </TailwindProvider>
  );
}
export default codePush(codePushOptions)(App);
