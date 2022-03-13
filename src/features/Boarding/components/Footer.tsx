import React from 'react';
import { StyleSheet, View } from 'react-native';

interface FooterProps {
  footerContent: JSX.Element;
}

const Footer = (props: FooterProps) => {
  return <View style={styles.footer}>{props.footerContent}</View>;
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
    height: '16%',
  },
});

export default Footer;
