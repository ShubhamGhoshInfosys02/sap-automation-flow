// src/features/panelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const startPanelSlice = createSlice({
  name: "startPanelSlice",
  initialState: {
    isOpen: false,
    isExecuteOpen: false,
    componentType: "",
  },
  reducers: {
    togglePanel: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleExecutePanel: (state) => {
      console.log("Toggele Execute");
      state.isExecuteOpen = !state.isExecuteOpen;
    },
    setComponentType: (state, action) => {
      console.log("action", action);
      state.componentType = action.payload;
    },
  },
});

// Export actions
export const { togglePanel, toggleExecutePanel, setComponentType } =
  startPanelSlice.actions;

// Export the reducer
export default startPanelSlice.reducer;
