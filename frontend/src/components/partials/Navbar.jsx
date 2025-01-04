import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#1F1E24]">
      <nav className="flex justify-between items-center p-8">
        <h1 className="text-[#6556CD] text-3xl font-semibold">Genre.</h1>
        <div className="hidden space-x-10 sm:flex">
          <Link to="/" className="text-white hover:text-[#6556CD] text-xl">
            Movies
          </Link>
          <Link
            to="/bookings"
            className="text-white hover:text-[#6556CD] text-xl"
          >
            Bookings
          </Link>
          <Link to="/user" className="text-white hover:text-[#6556CD] text-xl">
            User
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
