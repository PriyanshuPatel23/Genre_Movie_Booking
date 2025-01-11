import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    booking: null,
  },
  reducers: {
    fetchbooking: (state, action) => {
      state.booking = action.payload;
    },
    fetchByid: (state, action) => {
      state.booking = action.payload;
    },
    createbooking: (state, action) => {
      state.booking.push(action.payload);
    },
    deletebooking: (state, action) => {
      state.booking = action.payload;
    },
  },
});

export const { fetchbooking, createbooking, deletebooking, fetchByid } =
  bookingSlice.actions;

export default bookingSlice.reducer;
