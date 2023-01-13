import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { howManyOccursVoid } from "../hooks/functions";

export interface Db {
  id: number;
  date: string;
  normal1: number[];
  normal2: number[];
  sort1: number[];
  sort2: number[];
}

export interface DbState {
  value: Array<Db>;
  data50: howManyOccursVoid[];
  data12: howManyOccursVoid[];
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
    updateDb50: (state, action: PayloadAction<Array<howManyOccursVoid>>) => {
      state.data50 = action.payload;
    },
    updateDb12: (state, action: PayloadAction<Array<howManyOccursVoid>>) => {
      state.data12 = action.payload;
    },
  },
});

export const { updateDb, updateDb50, updateDb12 } = dbSlice.actions;
export default dbSlice.reducer;
