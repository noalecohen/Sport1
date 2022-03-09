import { createAsyncThunk } from '@reduxjs/toolkit';
import Strings from '../../constants/Strings';
import moreRepository from './moreRepository';

const moreAsync = {
  getCategories: createAsyncThunk(
    Strings.moreScreen.api.getAllCategories.TYPE_PREFIX,
    async () => {
      try {
        const result = await moreRepository.getCategories();
        return result;
      } catch (error) {
        //TODO: handle error
      }
    }
  ),
};

export default moreAsync;
