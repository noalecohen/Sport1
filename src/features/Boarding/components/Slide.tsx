import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export interface Slide {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

interface slideProps {
  item: Slide;
}

const {width, height} = Dimensions.get('window');

const Slide = (props: slideProps) => {
  return (
    <View style={styles.slide}>
      <Image source={props.item.image} style={styles.image} />
      <Text style={styles.title}>{props.item.title}</Text>
      <View style={styles.line} />
      <Text style={styles.subtitle}>{props.item.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    width: width,
    //backgroundColor: 'blue',
    height: height * 0.72,
    flex: 1,
  },
  image: {
    height: '75%',
    width: width,
    resizeMode: 'contain',
  },
  title: {
    color: 'black',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  subtitle: {
    color: 'black',
    maxWidth: '65%',
    textAlign: 'center',
    marginTop: 25,
  },
  line: {
    height: 4,
    width: 60,
    backgroundColor: Colors.activeIcon,
    borderRadius: 7,
    marginTop: 3,
  },
});

export default Slide;
