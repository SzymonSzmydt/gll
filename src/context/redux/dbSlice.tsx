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

export type dataWithDraw = {
  id: number[];
  draw: number[];
  num: number;
  date: string[];
};

export interface DbState {
  value: Array<Db>;
  data50: dataWithDraw[];
  data12: dataWithDraw[];
}

const initialState: DbState = {
  value: [],
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
    updateDb50: (state, action: PayloadAction<Array<dataWithDraw>>) => {
      state.data50 = action.payload;
    },
    updateDb12: (state, action: PayloadAction<Array<dataWithDraw>>) => {
      state.data12 = action.payload;
    },
  },
});

export const { updateDb, updateDb50, updateDb12 } = dbSlice.actions;
export default dbSlice.reducer;
