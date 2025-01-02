import React, { useEffect, useState } from "react";
import { FaUserEdit, FaKey } from "react-icons/fa";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/getuser");
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found. Please log in again.</p>;
  }

  return (
    <div className="min-h-screen bg-[#1F1E24] text-white flex flex-col items-center mt-[10%] py-8 px-4 sm:px-8">
      <div className="w-full max-w-md bg-[#6556CD] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          User Profile
        </h2>
        <div className="space-y-4">
          {/* Name */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-200">Name</p>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
            <button className="text-white hover:text-gray-300">
            <Link to='/changedetails'><FaUserEdit size={20} /></Link>
            </button>
          </div>
          {/* Email */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-200">Email</p>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
          </div>
          {/* Password */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-200">Password</p>
              <p className="text-lg font-medium">********</p>
            </div>
            <button className="text-white hover:text-gray-300">
              <Link to='/changepassword'><FaKey size={20} /></Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
