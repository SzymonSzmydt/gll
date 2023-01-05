import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Db {
  [key: string]: {
    normal1: number[];
    normal2: number[];
    sort1: number[];
    sort2: number[];
  };
}

export interface DbState {
  value: Db[];
}

const initialState: DbState = {
  value: [],
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {
    updateDb: (state, action: PayloadAction<Array<Db>>) => {
      state.value = action.payload;
    },
  },
});

export const { updateDb } = dbSlice.actions;

export default dbSlice.reducer;
