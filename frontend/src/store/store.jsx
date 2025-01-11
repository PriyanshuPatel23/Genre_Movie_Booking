import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieSlice";
import theatreReducer from "./reducers/TheatreSlice";
import bookingReducer from "./reducers/BookingSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    theatre: theatreReducer,
    booking: bookingReducer,
  },
});
