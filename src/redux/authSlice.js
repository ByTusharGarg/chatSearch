import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state) => {
      state.authToken = "";
    },
    updateToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { removeToken, updateToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
