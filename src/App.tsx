/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Colors from './constants/Colors';
import AppStackNavigator from './AppStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.screen}>
          <StatusBar backgroundColor={Colors.BLACK} />
          <AppStackNavigator />
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
