import axios from 'axios';
import Strings from '../../constants/Strings';

export async function getConfig() {
  try {
    const result = await axios.get(
      `${Strings.api.BASE_URL}${Strings.api.getConfig.ENDPOINT}`,
      { headers: { 'x-sport1-mobile-app': true } }
    );
    return result.data;
  } catch (error) {
    //handle error
  }
}
