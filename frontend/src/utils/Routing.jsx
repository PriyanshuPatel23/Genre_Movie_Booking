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
import EditMovie from "../components/admin/editMovie";

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
    </Routes>
  );
}

export default Routing;
