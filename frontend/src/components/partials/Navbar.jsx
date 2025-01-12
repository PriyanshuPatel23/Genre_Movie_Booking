import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetUserById } from "../../store/actions/UserActions";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetUserById());
  }, [dispatch]);

  return (
    <div className="bg-[#1F1E24]">
      <nav className="flex justify-between items-center p-8">
        <h1 className="text-[#6556CD] text-3xl font-semibold">Genre.</h1>
        <div className="hidden space-x-10 sm:flex">
          <Link to="/" className="text-white hover:text-[#6556CD] text-xl">
            Movies
          </Link>
          <Link to="/user" className="text-white hover:text-[#6556CD] text-xl">
            {user && user.data ? user.data.name : "User"}
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
