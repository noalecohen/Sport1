import { createSlice } from '@reduxjs/toolkit';
import Strings from '../../constants/Strings';
import { RootState } from '../../store/Store';
import Category from './more.model';
import moreAsync from './moreAsync';

//interface for *all* the states in More
interface InitialState {
  categories: Category[] | null;
}

//the "state" - initialize *all* states in More
const initialState: InitialState = {
  categories: null,
};

const moreSlice = createSlice({
  name: Strings.moreScreen.slice.NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moreAsync.getCategories.fulfilled, (state, action) => {
        if (!state.categories) {
          state.categories = [...action.payload.categories];
        } else {
          state.categories.push(...action.payload.categories);
        }
      })
      .addCase(moreAsync.getCategories.pending, () => {}) //TODO: activity indicator
      .addCase(moreAsync.getCategories.rejected, () => {}); //TODO: handle errors
  },
});
export const selectCategories = (state: RootState) => state.more.categories;
export default moreSlice.reducer;
