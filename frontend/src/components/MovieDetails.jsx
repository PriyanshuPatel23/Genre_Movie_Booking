import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetmoviebyid } from "../store/actions/MovieActions";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movie);
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncgetmoviebyid(id));
  }, [dispatch, id]);

  return (
    <div className="bg-[#1F1E24] h-screen overflow-auto text-white p-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#6556CD]">{movie.title}</h1>
          <p className="text-lg">
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#6556CD]">
          Theatres and Showtimes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {movie.theatres && movie.theatres.length > 0 ? (
            movie.theatres.map((theatre, index) => (
              <div
                key={index}
                className="bg-[#2B2B36] p-4 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#6556CD]">
                  {theatre.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{theatre.address}</p>
                {movie.showtimes
                  .filter((showtime) => showtime.theatreId === theatre._id)
                  .map((showtime, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-lg font-semibold text-[#6556CD]">
                        Showtimes:
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {showtime.time.map((slot, index) => (
                          <Link
                            to={`/booking/${movie._id}/${theatre._id}/${slot}`}
                            key={index}
                            className="px-3 py-1 bg-[#6556CD] text-white rounded-full text-sm"
                          >
                            {slot}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className="text-gray-400">
              No theatres available for this movie.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
