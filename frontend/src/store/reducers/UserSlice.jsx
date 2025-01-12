import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    fetchByid: (state, action) => {
      state.user = action.payload;
    },
    createuser: (state, action) => {
      state.user.push(action.payload);
    },
    updateuser: (state, action) => {
      state.user = action.payload;
    },
    isAuthenticated: (state, action) => {
      state.user = action.payload;
    },
    isAdmin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { fetchByid, createuser, updateuser, isAuthenticated, isAdmin } =
  userSlice.actions;

export default userSlice.reducer;
