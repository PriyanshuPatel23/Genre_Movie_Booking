import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTheatre } from "../../store/actions/TheatreActions";
import { asyncisAdmin } from "../../store/actions/UserActions";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ManageTheatre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theatre } = useSelector((state) => state.theatre);

  useEffect(() => {
    dispatch(asyncisAdmin());
    if (!user) {
      navigate("/");
      console.log("Not authorized");
    }
    dispatch(asyncLoadTheatre());
  }, []);

  const { user } = useSelector((state) => state.user);

  const handleEdit = (id) => {
    console.log("Edit theatre with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete theatre with id:", id);
  };

  return (
    <div className="bg-[#1F1E24] h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-[#6556CD] mb-6 text-center">
        Manage Theatres
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-[#2B2B36] rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-lg font-semibold text-[#6556CD]">
                Title
              </th>
              <th className="px-4 py-2 text-lg font-semibold text-[#6556CD]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {theatre.length == 0 ? (
              <tr>
                <td colSpan="2" className="text-center text-gray-400 py-4">
                  No theatres available
                </td>
              </tr>
            ) : (
              theatre.map((t) => (
                <tr key={t._id}>
                  <td className="px-4 py-2 text-gray-300">{t.name}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(t._id)}
                      className="text-[#6556CD] hover:text-[#5349b5] mr-4"
                    >
                      <Link to={`/admin/edittheatre/${t._id}`}>
                        {" "}
                        <FaEdit size={20} />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(t._id)}
                      className="text-[#6556CD] hover:text-[#5349b5]"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTheatre;
