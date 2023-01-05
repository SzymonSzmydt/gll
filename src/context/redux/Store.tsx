import { configureStore } from "@reduxjs/toolkit";
import dbSliceReducer from "./dbSlice";
export const store = configureStore({
  reducer: {
    database: dbSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
