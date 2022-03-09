import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import Header from './components/Header';

const MainScreen = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <AppBottomTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default MainScreen;
