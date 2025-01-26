// src/store/notificationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    severity: "",
    open: false,
  },
  reducers: {
    showNotification: (state, action) => {
      console.log("actions", action);
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = "";
      state.severity = "";
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
