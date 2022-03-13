//return: 1 if min > device, -1 if min < device, 0 if min === device (by value & length)
export function compareVersion(
  minVersion: string,
  deviceVersion: string
): number {
  const minVersionArr = minVersion.split('.');
  const deviceVersionArr = deviceVersion.split('.');

  const minLength = Math.min(minVersionArr.length, deviceVersionArr.length);
  let index = 0;
  for (index; index < minLength; ++index) {
    if (
      parseInt(minVersionArr[index], 10) > parseInt(deviceVersionArr[index], 10)
    ) {
      return 1;
    }
    if (
      parseInt(minVersionArr[index], 10) < parseInt(deviceVersionArr[index], 10)
    ) {
      return -1;
    }
  }

  if (minVersionArr.length === deviceVersionArr.length) {
    return 0;
  }

  if (minVersionArr.length > deviceVersionArr.length) {
    for (index; index < minVersionArr.length; index++) {
      if (parseInt(minVersionArr[index], 10) !== 0) {
        return 1;
      }
    }
  }
  return -1;
}
