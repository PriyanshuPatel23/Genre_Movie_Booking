import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/partials/Navbar";
import Signin from "./components/Signin";
import UserPage from "./components/UserPage";
import ChangePassword from "./components/ChangePassword";
import ChangeDetails from "./components/ChangeDetails";


function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/changedetails" element={<ChangeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
