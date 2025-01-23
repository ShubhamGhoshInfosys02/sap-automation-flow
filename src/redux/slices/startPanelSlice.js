// src/features/panelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const startPanelSlice = createSlice({
  name: "startPanelSlice",
  initialState: {
    isOpen: false,
    isExecuteOpen: false,
    componentType: "",
    nodes: [],
    edges: [],
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
    updateNodes: (state, action) => {
      action.payload.map((data) => console.log("Nodes update", data));
      // state.nodes = action.payload.map((data)=>);
    },
    updateEdges: (state, action) => {
      state.edges = action.payload;
    },
  },
});

// Export actions
export const {
  togglePanel,
  toggleExecutePanel,
  setComponentType,
  updateNodes,
  updateEdges,
} = startPanelSlice.actions;

// Export the reducer
export default startPanelSlice.reducer;
