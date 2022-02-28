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
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={'black'} />
      <Header />
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
