import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Strings from '../../constants/Strings';

const VodScreen = () => {
  return (
    <View style={styles.text}>
      <Text>{Strings.vodScreen.PLACEHOLDER}</Text>
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

export default VodScreen;
