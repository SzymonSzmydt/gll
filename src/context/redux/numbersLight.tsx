import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type LightProps = {
  normal1: number[];
  normal2: number[];
  date: string;
};

const initialState: LightProps = {
  normal1: [],
  normal2: [],
  date: "",
};

export const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    updateLight1: (state, action: PayloadAction<number[]>) => {
      state.normal1 = action.payload;
    },
    updateLight2: (state, action: PayloadAction<number[]>) => {
      state.normal2 = action.payload;
    },
    updateLightDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { updateLight1, updateLight2, updateLightDate } =
  lightSlice.actions;
export default lightSlice.reducer;
