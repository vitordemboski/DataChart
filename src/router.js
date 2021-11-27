import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@components/pages/home';
import Auth from '@components/pages/auth';
import Welcome from '@components/pages/welcome';
import SignIn from '@components/pages/signin';
import SignUp from '@components/pages/signup';
import Graphic from '@components/pages/graphic';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Graphic" component={Graphic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
