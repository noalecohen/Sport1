import moreApi from './moreApi';

const moreRepository = {
  getCategories: async () => {
    try {
      const result = await moreApi.getCategories();
      return result;
    } catch (error) {
      //TODO: handle error
    }
  },
};

export default moreRepository;
