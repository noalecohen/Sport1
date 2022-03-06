import { configureStore } from "@reduxjs/toolkit";
import moreReducer from "../features/More/moreSlice";

export const store = configureStore({
  reducer: {
    more: moreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
