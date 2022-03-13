import { NavigationAction } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Strings from '../../../constants/Strings';

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
        <Text style={styles.takeIntoTitle}>
          {Strings.boardingScreen.slides.thirdSlide.footer.START}
        </Text>
      </TouchableOpacity>
      <View style={styles.userMessage}>
        <Text>
          {Strings.boardingScreen.slides.thirdSlide.footer.HAVE_USER_BUTTON}
        </Text>
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
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
  },
  userMessage: {
    fontSize: 15,
    color: Colors.LIGHT_GREY,
    marginTop: 20,
  },
});

export default Start;
