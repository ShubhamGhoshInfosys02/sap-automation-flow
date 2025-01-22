// src/features/panelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const startPanelSlice = createSlice({
  name: "startPanelSlice",
  initialState: {
    isOpen: false,
  },
  reducers: {
    togglePanel: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export actions
export const { togglePanel } = startPanelSlice.actions;

// Export the reducer
export default startPanelSlice.reducer;
