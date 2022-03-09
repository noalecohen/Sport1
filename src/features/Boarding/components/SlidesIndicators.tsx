import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { Slide } from './Slide';

interface SlidesIndicatorsProps {
  slides: Slide[];
  currentSlideIndex: number;
}

const SlidesIndicators = (props: SlidesIndicatorsProps) => {
  return (
    <View style={styles.indicatorContainer}>
      {props.slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            props.currentSlideIndex === index && {
              backgroundColor: Colors.ACTIVE_ICON,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: '#CECECE', //grey
    marginHorizontal: 3,
    borderRadius: 5,
  },
});

export default SlidesIndicators;
