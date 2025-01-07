import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieSlice";
import theatreReducer from "./reducers/TheatreSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    theatre: theatreReducer,
  },
});
