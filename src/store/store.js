import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../common/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
