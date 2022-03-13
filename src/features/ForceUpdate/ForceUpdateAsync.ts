import DeviceInfo from 'react-native-device-info';
import { compareVersion } from '../../Utils';
import ForceUpdateRepository from './ForceUpdateRepository';

export default class ForceUpdateAsync {
  static async isForceUpdateNeeded() {
    const deviceVersion = DeviceInfo.getVersion();
    try {
      const minAppVersion = await ForceUpdateRepository.getMinVersion();
      const comp = compareVersion(minAppVersion, deviceVersion);
      return comp === 1;
    } catch (error) {
      //handle error
    }
  }
}
