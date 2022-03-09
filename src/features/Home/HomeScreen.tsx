import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Strings from '../../constants/Strings';

const HomeScreen = () => {
  return (
    <View style={styles.text}>
      <Text>{Strings.homeScreen.PLACEHOLDER}</Text>
    </View>
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
