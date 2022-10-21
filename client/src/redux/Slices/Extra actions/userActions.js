import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/signup", userData, {
        headers: { "Content-Type": "application/json" },
      });
      return { data: data.user, isAuthenticated: true };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/login", userData, {
        headers: { "Content-Type": "application/json" },
      });
      return { data: data.user, isAuthenticated: true };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/aboutme");
      return { data: data.user, isAuthenticated: data.success };
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/getInfo",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/logout");
      return data.message;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/password/forgot",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/password/forgot", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);
