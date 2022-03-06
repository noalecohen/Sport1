import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store/Store";
import Category from "./more.model";
import moreAsync from "./moreAsync";

//interface for *all* the states in More
interface InitialState {
  categories: Category[] | null;
}

//the "state" - initialize *all* states in More
const initialState: InitialState = {
  categories: null,
};

const moreSlice = createSlice({
  name: "more",
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
        console.log("fulfilled...");
      })
      .addCase(moreAsync.getCategories.pending, () => {
        console.log("pending...");
      })
      .addCase(moreAsync.getCategories.rejected, () => {
        console.log("error");
      });
  },
});

export const selectCategories = (state: RootState) => state.more.categories;
export default moreSlice.reducer;
