import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/home';
import {SchoolScreen} from './src/screens/school';
import {QueryClient, QueryClientProvider} from 'react-query';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {TeamScreen} from './src/screens/team';

export type RootStackParamList = {
  Home: undefined;
  School: {schoolId: string};
  Team: {teamId: string; schoolId: string};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="School" component={SchoolScreen} />
            <Stack.Screen name="Team" component={TeamScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </TailwindProvider>
  );
}
export default App;
