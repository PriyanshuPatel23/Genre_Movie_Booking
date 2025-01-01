import React from "react";

function Navbar() {
  return (
    <div className="bg-[#1F1E24]">
      <nav className="flex justify-between items-center p-8">
        <h1 className="text-[#6556CD] text-3xl font-semibold">Genre.</h1>
        <div className="hidden space-x-10 sm:flex">
          <a href="" className="text-white hover:text-[#6556CD] text-xl">
            Home
          </a>
          <a href="" className="text-white hover:text-[#6556CD] text-xl">
            Movies
          </a>
          <a href="" className="text-white hover:text-[#6556CD] text-xl">
            Bookings
          </a>
          <a href="" className="text-white hover:text-[#6556CD] text-xl">
            User
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
