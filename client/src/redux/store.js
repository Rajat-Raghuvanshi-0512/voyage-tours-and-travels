import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/entities/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
