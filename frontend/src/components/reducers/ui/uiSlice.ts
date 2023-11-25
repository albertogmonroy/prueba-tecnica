import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../interface/ui/uiInterface";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOnline: true,
  } as UiState,
  reducers: {
    onChangeModeOnline: (state, { payload }) => {
      state.isOnline = payload;
    },
  },
});

export const { onChangeModeOnline } = uiSlice.actions;
