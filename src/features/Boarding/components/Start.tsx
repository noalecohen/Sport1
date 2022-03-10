import { NavigationAction } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';

interface StartProps {
  navigation: NavigationAction<any, any>;
}

const Start = (props: StartProps) => {
  return (
    <View style={styles.start}>
      <TouchableOpacity
        style={styles.takeInto}
        onPress={() => {
          props.navigation.navigate('mainScreen');
        }}
      >
        <Text style={styles.takeIntoTitle}>קח אותי פנימה</Text>
      </TouchableOpacity>
      <View style={styles.userMessage}>
        <Text>כבר יש לי משתמש</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  start: {
    margin: 10,
    alignItems: 'center',
  },
  takeInto: {
    backgroundColor: Colors.ACTIVE_ICON,
    borderRadius: 3,
    width: 190,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  takeIntoTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  userMessage: {
    fontSize: 15,
    color: '#545454',
    marginTop: 20,
  },
});

export default Start;
