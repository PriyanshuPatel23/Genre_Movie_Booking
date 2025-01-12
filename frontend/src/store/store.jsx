import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/MovieSlice";
import theatreReducer from "./reducers/TheatreSlice";
import bookingReducer from "./reducers/BookingSlice";
import userReducer from "./reducers/UserSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    theatre: theatreReducer,
    booking: bookingReducer,
    user: userReducer,
  },
});
