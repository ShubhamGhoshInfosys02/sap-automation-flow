// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import startPanelSlice from "./slices/startPanelSlice";

const store = configureStore({
  reducer: {
    startPanelSlice,
  },
});

export default store;
