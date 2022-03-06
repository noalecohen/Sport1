import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store/Store";
import Category from "./more.model";
import moreAsync from "./moreAsync";

//interface for *all* the states in More
interface InitialState {
  categories: Category[];
  status: "idle" | "pending" | "fulfilled" | "failed";
}

//the "state" - initialize *all* states in More
const initialState: InitialState = {
  categories: [],
  status: "idle",
};

const moreSlice = createSlice({
  name: "more",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moreAsync.getCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories.push(...action.payload.categories);
      })
      .addCase(moreAsync.getCategories.pending, (state) => {
        state.status = "pending";
        console.log("pending...");
      })
      .addCase(moreAsync.getCategories.rejected, () => {
        console.log("error");
      });
  },
});

export const selectCategories = (state: RootState) => state.more.categories;
export const selectStatus = (state: RootState) => state.more.status;
export default moreSlice.reducer;
