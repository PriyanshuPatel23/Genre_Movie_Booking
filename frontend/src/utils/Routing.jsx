import React from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import UserPage from "../components/UserPage";
import ChangeDetails from "../components/ChangeDetails";
import ChangePassword from "../components/ChangePassword";
import { Routes, Route } from "react-router-dom";
import RequestReset from "../components/requestReset";
import ResetPassword from "../components/ResetPassword";
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
    </Routes>
  );
}

export default Routing;
