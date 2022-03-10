import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from './features/Boarding/BoardingScreen';
import MainScreen from './MainScreen';
import Splash from './features/Splash/Splash';
import ForceUpdateScreen from './features/ForceUpdate/ForceUpdateScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  onBoardingScreen: undefined;
  mainScreen: undefined;
  splash: undefined;
  forceUpdateScreen: undefined;
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="splash"
    >
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="forceUpdateScreen" component={ForceUpdateScreen} />
      <Stack.Screen name="onBoardingScreen" component={BoardingScreen} />
      <Stack.Screen name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
