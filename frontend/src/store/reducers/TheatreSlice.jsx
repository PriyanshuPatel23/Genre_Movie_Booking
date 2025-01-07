import { createSlice } from "@reduxjs/toolkit";

export const theatreSlice = createSlice({
  name: "theatre",
  initialState: {
    theatre: [],
  },
  reducers: {
    fetchtheatre: (state, action) => {
      state.theatre = action.payload;
    },
    fetchByid: (state, action) => {
      state.theatre = action.payload;
    },
    createtheatre: (state, action) => {
      state.theatre.push(action.payload);
    },
    updatetheatre: (state, action) => {
      const index = state.theatre.findIndex(
        (theatre) => theatre._id === action.payload._id
      );
      if (index !== -1) state.theatre[index] = action.payload;
    },
    deletetheatre: (state, action) => {
      state.theatre = state.theatre.filter(
        (theatre) => theatre._id !== action.payload
      );
    },
  },
});

export const {
  fetchtheatre,
  createtheatre,
  updatetheatre,
  deletetheatre,
  fetchByid,
} = theatreSlice.actions;

export default theatreSlice.reducer;
