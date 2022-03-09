/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import BoardingScreen from './features/Boarding/BoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null,
  );

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor={'black'} />

        <Stack.Navigator
          //initialRouteName="onBoardingScreen"
          screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen name="onBoardingScreen" component={BoardingScreen} />
          )}
          <Stack.Screen name="mainScreen" component={MainScreen} />
        </Stack.Navigator>

        {/* <AppNavigator /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
