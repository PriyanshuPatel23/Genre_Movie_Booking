import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetUserById } from "../../store/actions/UserActions";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(asyncgetUserById());
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#1F1E24] shadow-lg">
      <nav className="flex justify-between items-center p-4 sm:p-6">
        <h1 className="text-[#6556CD] text-3xl font-semibold">Genre.</h1>

        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden sm:flex space-x-10">
          <Link
            to="/"
            className="text-white hover:text-[#6556CD] text-xl transition-colors"
          >
            Movies
          </Link>
          <Link
            to="/user"
            className="text-white hover:text-[#6556CD] text-xl transition-colors"
          >
            {user && user.data ? user.data.name : "User"}
          </Link>
        </div>
      </nav>

      <div
        className={`${
          isMenuOpen ? "max-h-40" : "max-h-0"
        } overflow-hidden bg-[#1F1E24] transition-all duration-300 sm:hidden`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="text-white hover:text-[#6556CD] text-xl transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/user"
            className="text-white hover:text-[#6556CD] text-xl transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {user && user.data ? user.data.name : "User"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
