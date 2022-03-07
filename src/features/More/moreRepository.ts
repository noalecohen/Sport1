import moreApi from './moreApi';

const moreRepository = {
  getCategories: async () => {
    const result = await moreApi.getCategories();
    return result;
  },
};

export default moreRepository;
