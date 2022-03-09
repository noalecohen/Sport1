import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from './features/Boarding/BoardingScreen';
import MainScreen from './MainScreen';

export type RootStackParamList = {
  onBoardingScreen: undefined;
  mainScreen: undefined;
};

interface AppStackNavigatorProps {
  isAppFirstLaunch: boolean | null;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigator = (props: AppStackNavigatorProps) => {
  return (
    <Stack.Navigator
      //initialRouteName="onBoardingScreen"
      screenOptions={{ headerShown: false }}
    >
      {props.isAppFirstLaunch && (
        <Stack.Screen name="onBoardingScreen" component={BoardingScreen} />
      )}
      <Stack.Screen name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
