import React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import UserPage from "../components/UserPage";
import ChangeDetails from "../components/ChangeDetails";
import ChangePassword from "../components/ChangePassword";
import { Routes, Route } from "react-router-dom";
import RequestReset from "../components/requestReset";
import ResetPassword from "../components/ResetPassword";
import Dashboard from "../components/admin/Dashboard";
import ManageMovies from "../components/admin/ManageMovies";
import ManageTheatres from "../components/admin/ManageTheatres";
import AddMovie from "../components/admin/AddMovie";
import AddTheatre from "../components/admin/AddTheatre";

function Routing() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/changedetails" element={<ChangeDetails />} />
      <Route path="/requestmail" element={<RequestReset />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/managemovies" element={<ManageMovies />} />
      <Route path="/admin/managetheatres" element={<ManageTheatres />} />
      <Route path="/admin/addmovie" element={<AddMovie />} />
      <Route path="/admin/addtheatre" element={<AddTheatre />} />
    </Routes>
  );
}

export default Routing;
