import ForceUpdateApi from './ForceUpdateApi';

export default class ForceUpdateRepository {
  static async getIosMinVersion() {
    const config = await ForceUpdateApi.getConfig();
    return config.general.ios_min_version;
  }

  static async getAndroidMinVersion() {
    const config = await ForceUpdateApi.getConfig();
    return config.general.android_min_version;
  }
}
