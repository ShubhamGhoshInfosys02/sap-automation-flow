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
      state.nodes = action.payload;
    },
    updateEdges: (state, action) => {
      state.edges = action.payload;
    },
    updateNodeValue: (state, action) => {
      const result = state.nodes.map((node) => {
        if (node.id === action.payload.label) {
          return {
            ...node,
            data: action.payload,
          };
        }
        return node; // Return the node unchanged if it doesn't match
      });
      state.nodes = result;
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
  updateNodeValue,
} = startPanelSlice.actions;

// Export the reducer
export default startPanelSlice.reducer;
