import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Properties {
  date: string;
  normal1: number[];
  normal2: number[];
  sort1: number[];
  sort2: number[];
}

export interface Db {
  [key: string]: Properties;
}

export interface DbState {
  value: Array<Db>;
}

const initialState: DbState = {
  value: [],
};

export const dbSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    updateDb: (state, action: PayloadAction<Array<Db>>) => {
      state.value = action.payload;
    },
  },
});

export const { updateDb } = dbSlice.actions;
export default dbSlice.reducer;
