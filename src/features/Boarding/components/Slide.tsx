import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../../constants/Colors';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

export interface Slide {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

interface slideProps {
  item: Slide;
}

const Slide = (props: slideProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles(width).slide}>
      <Image source={props.item.image} style={styles(width).image} />
      <View style={styles(width).description}>
        <Text style={styles(width).title}>{props.item.title}</Text>
        <View style={styles(width).line} />
        <Text style={styles(width).subtitle}>{props.item.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    slide: {
      alignItems: 'center',
      width: width,
      flex: 1,
    },
    image: {
      flex: 0.7,
      justifyContent: 'center',
      width: width,
      resizeMode: 'contain',
    },
    title: {
      color: Colors.BLACK,
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 25,
    },
    subtitle: {
      color: Colors.BLACK,
      maxWidth: '80%',
      textAlign: 'center',
      marginTop: 25,
      fontSize: 19,
    },
    line: {
      height: 4,
      width: 60,
      backgroundColor: Colors.ACTIVE_ICON,
      borderRadius: 7,
      marginTop: 3,
    },
    description: {
      flex: 0.4,
      alignItems: 'center',
    },
  });

export default Slide;
