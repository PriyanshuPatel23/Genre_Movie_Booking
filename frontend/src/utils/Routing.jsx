import React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import UserPage from "../components/UserPage";
import ChangeDetails from "../components/ChangeDetails";
import ChangePassword from "../components/ChangePassword";
import { Routes, Route } from "react-router-dom";
import RequestReset from "../components/requestReset";
import ResetPassword from "../components/ResetPassword";
import Movies from "../components/Movies";
import MovieDetails from "../components/MovieDetails";
import AdminDashboard from "../components/admin/AdminDashboard";
import ManageMovies from "../components/admin/ManageMovies";
import EditMovie from "../components/admin/EditMovie";
import AddMovie from "../components/admin/AddMovie";
import ManageTheatre from "../components/admin/ManageTheatre";
import EditTheatre from "../components/admin/EditTheatre";
import AddTheatre from "../components/admin/AddTheatre";
import Booking from "../components/Booking";
import ThankYouPage from "../components/partials/ThankYouPage";
import Ticket from "../components/Ticket";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/changedetails" element={<ChangeDetails />} />
      <Route path="/requestmail" element={<RequestReset />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/managemovies" element={<ManageMovies />} />
      <Route path="/admin/editmovie/:id" element={<EditMovie />} />
      <Route path="/admin/addmovie" element={<AddMovie />} />
      <Route path="/admin/managetheatres" element={<ManageTheatre />} />
      <Route path="/admin/edittheatre/:id" element={<EditTheatre />} />
      <Route path="/admin/addtheatre" element={<AddTheatre />} />
      <Route
        path="/booking/:movieId/:theatreId/:showtime"
        element={<Booking />}
      />
      <Route path="/thanks" element={<ThankYouPage />} />
      <Route path="/ticket/:id" element={<Ticket />} />
    </Routes>
  );
}

export default Routing;
