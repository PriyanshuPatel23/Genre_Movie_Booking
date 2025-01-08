import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTheatre } from "../../store/actions/TheatreActions";
import { asyncaddMovie } from "../../store/actions/MovieActions";

function AddMovie() {
  const dispatch = useDispatch();
  const { theatre } = useSelector((state) => state.theatre);

  const [selectedTheatre, setSelectedTheatre] = useState("");
  const [showtime, setShowtime] = useState("");
  const [showtimesArray, setShowtimesArray] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
    posterUrl: "",
    theatres: [],
    showtimes: [],
  });

  useEffect(() => {
    dispatch(asyncLoadTheatre());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTheatreChange = (event) => {
    setSelectedTheatre(event.target.value);
  };

  const handleShowtimeChange = (event) => {
    setShowtime(event.target.value);
  };

  const addShowtime = () => {
    if (!selectedTheatre || !showtime) {
      alert("Please select a theatre and enter showtimes.");
      return;
    }

    const timesArray = showtime.split(",").map((time) => time.trim());

    setShowtimesArray((prev) => {
      const updatedArray = [
        ...prev,
        { theatreId: selectedTheatre, time: timesArray },
      ];

      setFormData((prevFormData) => ({
        ...prevFormData,
        theatres: updatedArray.map((entry) => entry.theatreId),
        showtimes: updatedArray,
      }));

      return updatedArray;
    });

    setShowtime("");
    setSelectedTheatre("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.title || !formData.genre || formData.showtimes.length === 0) {
      alert("Please fill out all required fields and add showtimes.");
      return;
    }
    dispatch(asyncaddMovie(formData));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1F1E24]">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-white p-8 rounded-md shadow-lg space-y-4 w-96"
      >
        <h2 className="text-2xl font-semibold text-[#6556CD] text-center">
          Add Movie
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        ></textarea>
        <input
          type="text"
          name="posterUrl"
          placeholder="Poster URL"
          onChange={handleChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />

        <select
          name="theatres"
          value={selectedTheatre}
          onChange={handleTheatreChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        >
          <option value="">Select a theatre</option>
          {theatre.map((t) => (
            <option value={t._id} key={t._id}>
              {t.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Showtime (e.g., 10:30 AM, 2:00 PM)"
          value={showtime}
          onChange={handleShowtimeChange}
          className="w-full p-2 bg-[#2A2933] text-white rounded-md"
        />

        <button
          type="button"
          onClick={addShowtime}
          className="w-full p-2 bg-[#6556CD] text-white rounded-md hover:bg-[#5048a5]"
        >
          Add Showtime
        </button>

        <ul className="text-black">
          {showtimesArray.map((entry, index) => (
            <li key={index} className="text-sm mt-2">
              Theatre: {theatre.find((t) => t._id === entry.theatreId)?.name} |
              Showtimes: {entry.time.join(", ")}
            </li>
          ))}
        </ul>

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

export default AddMovie;
