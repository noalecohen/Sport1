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
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles(width, height).slide}>
      <Image source={props.item.image} style={styles(width, height).image} />
      <Text style={styles(width, height).title}>{props.item.title}</Text>
      <View style={styles().line} />
      <Text style={styles().subtitle}>{props.item.subtitle}</Text>
    </View>
  );
};

const styles = (width?: number, height?: number) =>
  StyleSheet.create({
    slide: {
      alignItems: 'center',
      width: width,
      height: height! * 0.72,
      flex: 1,
    },
    image: {
      height: '75%',
      width: width ? width : '100%',
      resizeMode: 'contain',
    },
    title: {
      color: Colors.BLACK,
      fontSize: width! * 0.06,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 25,
    },
    subtitle: {
      color: Colors.BLACK,
      maxWidth: '65%',
      textAlign: 'center',
      marginTop: 25,
    },
    line: {
      height: 4,
      width: 60,
      backgroundColor: Colors.ACTIVE_ICON,
      borderRadius: 7,
      marginTop: 3,
    },
  });

export default Slide;
