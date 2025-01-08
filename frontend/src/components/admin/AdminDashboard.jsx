import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="bg-[#1F1E24] h-screen p-6">
      <div className="max-w-screen-lg mx-auto text-white">
        <h1 className="text-4xl font-bold text-[#6556CD] text-center mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2B2B36] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6556CD] mb-4">
              Manage Movies
            </h2>
            <Link
              to="/admin/managemovies"
              className="bg-[#6556CD] text-white py-2 px-6 rounded-lg hover:bg-[#5349b5] transition-colors"
            >
              View Movies
            </Link>
          </div>

          <div className="bg-[#2B2B36] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6556CD] mb-4">
              Manage Theatres
            </h2>
            <Link
              to="/admin/managetheatres"
              className="bg-[#6556CD] text-white py-2 px-6 rounded-lg hover:bg-[#5349b5] transition-colors"
            >
              View Theatres
            </Link>
          </div>

          <div className="bg-[#2B2B36] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6556CD] mb-4">
              Add Movie
            </h2>
            <Link
              to="/admin/addmovie"
              className="bg-[#6556CD] text-white py-2 px-6 rounded-lg hover:bg-[#5349b5] transition-colors"
            >
              Add New Movie
            </Link>
          </div>

          <div className="bg-[#2B2B36] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6556CD] mb-4">
              Add Theatre
            </h2>
            <Link
              to="/admin/addtheatre"
              className="bg-[#6556CD] text-white py-2 px-6 rounded-lg hover:bg-[#5349b5] transition-colors"
            >
              Add New Theatre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
