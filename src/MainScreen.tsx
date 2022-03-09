import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './AppNavigator';
import Header from './components/Header';

const MainScreen = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default MainScreen;
