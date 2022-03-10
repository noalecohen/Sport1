import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreen from './features/Boarding/BoardingScreen';
import MainScreen from './MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  onBoardingScreen: undefined;
  mainScreen: undefined;
};

const AppStackNavigator = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState<boolean | null>(
    null
  );

  const checkLaunch = async () => {
    const value = await AsyncStorage.getItem('firstTime');
    if (value) {
      setIsAppFirstLaunch(false);
      console.log('value is not null, isFirst  = ' + isAppFirstLaunch);
    } else {
      setIsAppFirstLaunch(true);
      console.log('value is null, isFirst  = ' + isAppFirstLaunch);
      AsyncStorage.setItem('firstTime', 'true');
    }
    SplashScreen.hide();
  };

  useEffect(() => {
    checkLaunch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAppFirstLaunch ? 'onBoardingScreen' : 'mainScreen'}
    >
      <Stack.Screen name="onBoardingScreen" component={BoardingScreen} />
      <Stack.Screen name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
