import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncgetbyid } from "../store/actions/TheatreActions";
import { asyncgetmoviebyid } from "../store/actions/MovieActions";
import { asynccreateBooking } from "../store/actions/BookingActions";
import { asyncisAuthenticated } from "../store/actions/UserActions";
import RestrictBackNavigation from "./partials/RestrictBackNavigation";

function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId, theatreId, showtime } = useParams();
  const { theatre } = useSelector((state) => state.theatre);
  const { movie } = useSelector((state) => state.movie);
  const { booking } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.user);
  const [seatsSelected, setSeatsSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [seatPrice, setSeatPrice] = useState(10);
  const [movieName, setMovieName] = useState("");
  const [theatreName, setTheatreName] = useState("");

  useEffect(() => {
    dispatch(asyncgetmoviebyid(movieId));
    dispatch(asyncgetbyid(theatreId));
    dispatch(asyncisAuthenticated());
    if (!user) {
      navigate("/signin");
    }
  }, [dispatch, movieId, theatreId]);

  useEffect(() => {
    if (movie) {
      setMovieName(movie.title);
    }
    if (theatre) {
      setTheatreName(theatre.name);
      setSeatPrice(theatre.price);
    }
  }, [movie, theatre]);

  useEffect(() => {
    setTotalPrice(seatsSelected * seatPrice);
  }, [seatsSelected, seatPrice]);

  const handleIncreaseSeats = () => {
    setSeatsSelected(seatsSelected + 1);
  };

  const handleDecreaseSeats = () => {
    if (seatsSelected > 0) {
      setSeatsSelected(seatsSelected - 1);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      movieId,
      theatreId,
      seats: seatsSelected,
      totalPrice,
      seatPrice,
      showtime,
    };

    dispatch(asynccreateBooking(bookingData));
    navigate("/thanks");
  };

  return (
    <div className="flex flex-col sm:flex-row p-6 bg-[#1F1E24] h-screen text-white">
      <div className="sm:w-1/3 w-full bg-[#2A2A2A] p-4 rounded-lg shadow-lg mb-6 sm:mb-0">
        <h2 className="text-3xl font-semibold text-[#6556CD] mb-6">
          Select Seats
        </h2>
        <div className="flex items-center justify-center mb-6">
          <button
            className="px-6 py-3 bg-[#6556CD] text-white rounded-lg"
            onClick={handleDecreaseSeats}
          >
            -
          </button>
          <span className="mx-4 text-2xl">{seatsSelected}</span>
          <button
            className="px-6 py-3 bg-[#6556CD] text-white rounded-lg"
            onClick={handleIncreaseSeats}
          >
            +
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-lg w-full"
            onClick={handleBooking}
            disabled={seatsSelected === 0}
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="sm:w-2/3 w-full bg-[#2A2A2A] p-6 rounded-lg shadow-lg sm:ml-8">
        <h2 className="text-3xl font-semibold text-[#6556CD] mb-6">
          Bill Summary
        </h2>
        <div className="mb-6">
          <p className="text-xl">
            <span className="font-semibold">Movie: </span> {movieName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Theatre: </span> {theatreName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Showtime: </span> {showtime}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-lg">
            <span className="font-semibold">Seats Selected: </span>{" "}
            {seatsSelected}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Price per Seat: </span> Rs.
            {seatPrice}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Total Price: </span> Rs.{totalPrice}
          </p>
        </div>
      </div>
      <RestrictBackNavigation />
    </div>
  );
}

export default Booking;
