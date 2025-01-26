// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import startPanelSlice from "./slices/startPanelSlice";
import notificationSlice from "./slices/notificatioSlice";

const store = configureStore({
  reducer: {
    startPanelSlice,
    notificationSlice,
  },
});

export default store;
