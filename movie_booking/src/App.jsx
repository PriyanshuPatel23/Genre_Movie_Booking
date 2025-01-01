import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/partials/Navbar";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
