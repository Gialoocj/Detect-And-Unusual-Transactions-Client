import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../api/authApi";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      state.user = null;
    },
    register: (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.error = null;
      state.message = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.message = null;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(action);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      });
  },
});

// Export reducer
export default authSlice.reducer;
