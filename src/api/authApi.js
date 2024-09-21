import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const base_url = "https://juliolove-backend.onrender.com/";
const base_url = "http://localhost:5000";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${base_url}/api/v1/auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${base_url}/api/v1/auth/register`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axios.get(`${base_url}/api/v1/auth/logout`);
  return response;
});
