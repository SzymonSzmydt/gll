import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Db {
  id: number;
  date: string;
  normal1: number[];
  normal2: number[];
  sort1: number[];
  sort2: number[];
}

export type DataWithDraw = {
  id: number[];
  draw: number[];
  num: number;
  date: string[];
};

export interface DbState {
  value: Array<Db>;
  keys: string[];
  data50: DataWithDraw[];
  data12: DataWithDraw[];
}

const initialState: DbState = {
  value: [],
  keys: [],
  data50: [],
  data12: [],
};

export const dbSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    updateDb: (state, action: PayloadAction<Array<Db>>) => {
      state.value = action.payload;
    },
    updateDbKeys: (state, action: PayloadAction<string[]>) => {
      state.keys = action.payload.sort();
    },
    updateDb50: (state, action: PayloadAction<Array<DataWithDraw>>) => {
      state.data50 = action.payload;
    },
    updateDb12: (state, action: PayloadAction<Array<DataWithDraw>>) => {
      state.data12 = action.payload;
    },
  },
});

export const { updateDb, updateDb50, updateDb12, updateDbKeys } =
  dbSlice.actions;
export default dbSlice.reducer;
