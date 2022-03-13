import { Platform } from 'react-native';
import ForceUpdateApi from './ForceUpdateApi';

export default class ForceUpdateRepository {
  static async getMinVersion() {
    try {
      const config = await ForceUpdateApi.getConfig();
      console.log(Platform.OS);
      if (Platform.OS === 'ios') {
        return config.general.ios_min_version;
      }
      if (Platform.OS === 'android') {
        return config.general.android_min_version;
      }
      return undefined;
    } catch {
      //handle error
    }
  }
}
