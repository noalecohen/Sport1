import React from 'react';
import {View, StyleSheet} from 'react-native';
import AccountIcon from '../../assets/icons/AccountIcon';
import Logo from '../../assets/Logo';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <AccountIcon />
      </View>
      <View style={styles.logo}>
        <Logo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#021414',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '50%',
  },
});

export default Header;
