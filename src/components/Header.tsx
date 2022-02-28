import React from 'react';
import {View, StyleSheet} from 'react-native';
import AccountIcon from '../assets/icons/AccountIcon';
import Logo from '../assets/Logo';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <AccountIcon style={styles.accountIcon} />
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: '#021414',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountIcon: {
    flex: 0.1,
    marginLeft: 16,
  },
});

export default Header;
