import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "../Extra actions/userActions";

const forgotPassSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    message: "",
    success: "",
  },
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: {
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error;
    },
  },
});

export const { clearErrors, clearMessage } = forgotPassSlice.actions;
export const forgotPasswordReducer = forgotPassSlice.reducer;
