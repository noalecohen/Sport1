import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.text}>
      <Text>More Screen Test</Text>
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

export default MoreScreen;
