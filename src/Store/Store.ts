import { configureStore } from '@reduxjs/toolkit';
import moreReducer from '../features/more/moreSlice';

export const store = configureStore({
  reducer: {
    more: moreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
