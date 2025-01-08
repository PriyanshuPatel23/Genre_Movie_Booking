import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    fetchmovie: (state, action) => {
      state.movie = action.payload;
    },
    fetchByid: (state, action) => {
      state.movie = action.payload;
    },
    createmovie: (state, action) => {
      state.movie.push(action.payload);
    },
    updatemovie: (state, action) => {
      state.movie = action.payload;
    },
    deletemovie: (state, action) => {
      state.movie = state.movie.filter((movie) => movie._id !== action.payload);
    },
  },
});

export const { fetchmovie, createmovie, updatemovie, deletemovie, fetchByid } =
  movieSlice.actions;

export default movieSlice.reducer;
