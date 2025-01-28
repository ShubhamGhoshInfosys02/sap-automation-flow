// src/features/panelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const startPanelSlice = createSlice({
  name: "startPanelSlice",
  initialState: {
    isOpen: false,
    discard: 0,
    isExecuteOpen: false,
    componentType: "",
    nodes: [],
    edges: [],
    selectedServer:[]
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
    updateSelectedServer:(state,action)=>{
      if(action.payload.length===0){
        state.selectedServer=[]
      }
      else if(state.selectedServer.includes(action.payload)){
        state.selectedServer=state.selectedServer.filter((data)=>data!==action.payload);
      }
      else{
        state.selectedServer=[...state.selectedServer,action.payload]
      }  
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
    discard: (state) => {
      state.isExecuteOpen = false;
      state.discard = state.discard + 1;
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
  discard,
  updateSelectedServer,
} = startPanelSlice.actions;

// Export the reducer
export default startPanelSlice.reducer;
