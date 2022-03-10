import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/Logo';
import Colors from '../../constants/Colors';
import ForceUpdateAsync from './ForceUpdateAsync';

const { width, height } = Dimensions.get('window');

const ForceUpdateScreen = () => {
  return (
    <View style={styles.screen}>
      <Logo style={styles.logo} />
      <View style={styles.image}>
        <Image source={require('../../assets/images/football.png')} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        יש לנו גרסה חדשה בשבילך!
      </Text>
      <Text style={styles.subTitle} numberOfLines={2}>
        עדכן את האפליקציה בשביל להנות מהתכנים הכי מעודכנים של ספורט 1.
      </Text>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={ForceUpdateAsync.isForceUpdateNeeded}
      >
        <Text style={styles.updateButtonTitle}>עדכן לגרסה החדשה</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#141414',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 23,
  },
  image: {
    marginTop: 129,
  },
  title: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    maxWidth: '80%',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  subTitle: {
    color: '#A9A9A9',
    maxWidth: '80%',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 15,
  },
  updateButton: {
    backgroundColor: Colors.ACTIVE_ICON,
    width: width * 0.7,
    height: height * 0.075,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 56,
  },
  updateButtonTitle: {
    fontWeight: 'bold',
    color: '#353535',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ForceUpdateScreen;
