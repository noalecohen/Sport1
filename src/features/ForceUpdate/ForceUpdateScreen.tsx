import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/Logo';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const ForceUpdateScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles().screen}>
      <Logo style={styles().logo} />
      <View style={styles().image}>
        <Image source={Strings.forceUpdateScreen.IMAGE_PATH} />
      </View>
      <Text style={styles().title} numberOfLines={1}>
        {Strings.forceUpdateScreen.TITLE}
      </Text>
      <Text style={styles().subTitle} numberOfLines={2}>
        {Strings.forceUpdateScreen.SUBTITLE}
      </Text>
      <TouchableOpacity
        style={styles(width, height).updateButton}
        onPress={() => {
          Linking.openURL('market://details?id=com.sport2.msport2');
        }}
      >
        <Text style={styles().updateButtonTitle}>
          {Strings.forceUpdateScreen.UPDATE_BUTTON}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (width?: number, height?: number) =>
  StyleSheet.create({
    screen: {
      backgroundColor: Colors.PRIMARY,
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
      color: Colors.SUBTITLE,
      maxWidth: '80%',
      textAlign: 'center',
      fontSize: 19,
      marginTop: 15,
    },
    updateButton: {
      backgroundColor: Colors.ACTIVE_ICON,
      width: width! * 0.7,
      height: height! * 0.075,
      borderRadius: 5,
      justifyContent: 'center',
      marginTop: 56,
    },
    updateButtonTitle: {
      fontWeight: 'bold',
      color: Colors.BUTTON_TITLE,
      textAlign: 'center',
      fontSize: 20,
    },
  });

export default ForceUpdateScreen;
