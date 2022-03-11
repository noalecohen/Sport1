import { Platform } from 'react-native';
import ForceUpdateApi from './ForceUpdateApi';

export default class ForceUpdateRepository {
  static async getMinVersion() {
    try {
      const config = await ForceUpdateApi.getConfig();
      return Platform.OS === 'ios'
        ? config.general.ios_min_version
        : Platform.OS === 'android'
        ? config.general.android_min_version
        : undefined;
    } catch {
      //handle error
    }
  }
}
