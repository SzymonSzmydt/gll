import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type LightProps = {
  value: number[];
};

const initialState: LightProps = {
  value: [],
};

export const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    updateLight: (state, action: PayloadAction<number[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateLight } = lightSlice.actions;
export default lightSlice.reducer;