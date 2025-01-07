import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie } from "../store/actions/MovieActions";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncLoadMovie());
  }, [dispatch]);

  const handleViewDetails = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="bg-[#1F1E24] h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#6556CD]">
        Available Movies
      </h1>
      {Array.isArray(movie) && movie.length === 0 ? (
        <p className="text-center text-gray-400">No movies available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(movie) &&
            movie.map((m) => (
              <div
                key={m._id}
                className="bg-[#1F1E24] rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={m.posterUrl}
                  alt={m.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">{m.title}</h3>
                  {m.releaseDate && (
                    <p className="text-sm text-gray-400">{m.releaseDate}</p>
                  )}
                </div>
                <div className="p-4">
                  <button
                    onClick={() => handleViewDetails(m._id)}
                    className="w-full bg-[#6556CD] text-white py-2 rounded-lg hover:bg-[#5349b5] transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
