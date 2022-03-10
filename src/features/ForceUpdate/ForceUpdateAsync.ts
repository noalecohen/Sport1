import { Platform } from 'react-native';
//import ReactNativeVersionInfo from 'react-native-version-info';
import ForceUpdateRepository from './ForceUpdateRepository';
import DeviceInfo from 'react-native-device-info';

export default class ForceUpdateAsync {
  static async isForceUpdateNeeded() {
    if (Platform.OS === 'ios') {
      console.log('***iOS version = ' + DeviceInfo.getVersion());
      //   console.log(
      //     'iOS CFBundleShortVersionString = ' + ReactNativeVersionInfo.appVersion
      //   );
      const ios_min_version = await ForceUpdateRepository.getIosMinVersion();
      console.log('iOS min version = ' + ios_min_version);
    }
    if (Platform.OS === 'android') {
      console.log('*** Android version = ' + DeviceInfo.getVersion());
      //console.log('Android versionName = ' + ReactNativeVersionInfo.appVersion);
      const android_min_version =
        await ForceUpdateRepository.getAndroidMinVersion();
      console.log('Android min version = ' + android_min_version);
    }
  }
}
