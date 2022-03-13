import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const slides = slideModel;
  const updateCurrentSlideIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
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

      <FlatList
        data={slides}
        onMomentumScrollBegin={updateCurrentSlideIndex}
        pagingEnabled
        contentContainerStyle={{ height: height * 0.65 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
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
});

export default BoardingScreen;
