import { configureStore } from "@reduxjs/toolkit";
import dbSliceReducer from "./dbSlice";
import lightSlicveReducer from "./numbersLight";
export const store = configureStore({
  reducer: {
    database: dbSliceReducer,
    light: lightSlicveReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
