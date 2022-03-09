/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Colors from './constants/Colors';
import AppStackNavigator from './AppStackNavigator';

const App = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState<boolean | null>(
    true
  );

  AsyncStorage.getItem('firstTime').then((value) => {
    if (value) {
      setIsAppFirstLaunch(false);
    } else {
      setIsAppFirstLaunch(true);
      AsyncStorage.setItem('firstTime', 'true');
    }
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.screen}>
          <StatusBar backgroundColor={'black'} />
          <AppStackNavigator isAppFirstLaunch={isAppFirstLaunch} />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default App;
