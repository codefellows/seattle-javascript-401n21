import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { beastsSlice } from "../features/beasts/beastsSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    beasts: beastsSlice.reducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
