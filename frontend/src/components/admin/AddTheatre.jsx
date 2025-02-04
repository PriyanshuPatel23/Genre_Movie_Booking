import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddTheatre } from "../../store/actions/TheatreActions";
import { asyncisAdmin } from "../../store/actions/UserActions";
import { useNavigate } from "react-router-dom";

function AddTheatre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncisAdmin());
    if (!user) {
      navigate("/");
      console.log("Not authorized");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    seats: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncAddTheatre(formData));
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1F1E24]">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-white p-8 rounded-md shadow-lg space-y-4 w-96"
      >
        <h2 className="text-2xl font-semibold text-[#6556CD] text-center">
          Add Theatre
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={formData.seats}
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
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

export default AddTheatre;
