import { Dimensions } from 'react-native';

export default function useWindowDimensions() {
  return Dimensions.get('window');
}
