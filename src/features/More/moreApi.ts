import axios from 'axios';
import Strings from '../../constants/Strings';

const moreApi = {
  getCategories: async () => {
    try {
      const result = await axios.get(
        `${Strings.moreScreen.api.BASE_URL}${Strings.moreScreen.api.getAllCategories.ENDPOINT}`,
        { headers: { 'x-sport1-mobile-app': true } } //TODO: didn't succeed to use the string constant
      );
      return result.data;
    } catch (error) {
      //TODO: handle error
    }
  },
};

export default moreApi;
