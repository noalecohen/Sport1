import axios from 'axios';
import Strings from '../../constants/Strings';

const moreApi = {
  getCategories: async () => {
    try {
      const result = await axios.get(
        `${Strings.api.BASE_URL}${Strings.api.getAllCategories.ENDPOINT}`,
        { headers: { 'x-sport1-mobile-app': true } }
      );
      return result.data;
    } catch (error) {
      //TODO: handle error
    }
  },
};

export default moreApi;
