import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { RootStackParamList } from '../../AppStackNavigator';
import SplashScreen from 'react-native-splash-screen';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'splash'>;

const Splash = ({ navigation }: SplashProps) => {
  useEffect(() => {
    AsyncStorage.getItem('firstLaunch').then((value) => {
      if (value) {
        navigation.navigate('forceUpdateScreen');
      } else {
        AsyncStorage.setItem('firstLaunch', 'true');
        navigation.navigate('onBoardingScreen');
      }
      SplashScreen.hide();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Splash;
