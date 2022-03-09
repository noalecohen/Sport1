import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BoardingScreen from '../Boarding/BoardingScreen';

const HomeScreen = () => {
  return (
    <View style={styles.text}>
      <Text>Home Screen</Text>
    </View>
    //<BoardingScreen />
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
