import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useRef } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import { RootStackParamList } from '../../AppStackNavigator';
import Colors from '../../constants/Colors';
import Footer from './components/Footer';
import Slide from './components/Slide';
import SlidesIndicators from './components/SlidesIndicators';
import Start from './components/Start';
import slideModel from './slide.model';

type BoardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'onBoardingScreen'
>;

const BoardingScreen = ({ navigation }: BoardingScreenProps) => {
  const slides = slideModel;
  const slidesRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentSlideIndex(viewableItems[0].index);
  }).current;

  const footerContent =
    currentSlideIndex < slides.length - 1 ? (
      <SlidesIndicators slides={slides} currentSlideIndex={currentSlideIndex} />
    ) : (
      <Start navigation={navigation} />
    );

  return (
    <View style={styles.screen}>
      <View style={styles.skip}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('mainScreen');
          }}
        >
          <Text style={styles.skipTitle}>דלג</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <Slide item={item} />}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Footer footerContent={footerContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.ONBOARDING_BACKGROUND,
  },
  skip: {
    alignItems: 'flex-start',
    alignContent: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
  skipTitle: {
    color: Colors.LIGHT_GREY,
  },
  list: {
    flex: 3,
  },
});

export default BoardingScreen;
