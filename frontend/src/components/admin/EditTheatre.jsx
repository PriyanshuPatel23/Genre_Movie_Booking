import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncgetbyid,
  asyncUpdateTheatre,
} from "../../store/actions/TheatreActions";
import { useNavigate, useParams } from "react-router-dom";

function EditTheatre() {
  const dispatch = useDispatch();
  const { theatre } = useSelector((state) => state.theatre);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    seats: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncUpdateTheatre(id, formData));
    navigate("/");
  };

  useEffect(() => {
    dispatch(asyncgetbyid(id));
  }, []);

  useEffect(() => {
    if (theatre) {
      setFormData({
        name: theatre.name || "",
        location: theatre.location || "",
        seats: theatre.seats || "",
        movies: theatre.movies || [],
      });
    }
  }, [theatre]);
  return (
    <div className="flex justify-center items-center h-screen bg-[#1F1E24]">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-white p-8 rounded-md shadow-lg space-y-4 w-96"
      >
        <h2 className="text-2xl font-semibold text-[#6556CD] text-center">
          Edit Theatre
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name || ""}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location || ""}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="text"
          name="seats"
          placeholder="Seats"
          value={formData.seats || ""}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />

        <button
          type="submit"
          className="w-full p-2 bg-[#6556CD] text-white rounded-md hover:bg-[#5048a5]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditTheatre;
