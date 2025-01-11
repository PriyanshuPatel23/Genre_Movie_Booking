import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetBookingById } from "../store/actions/BookingActions";

const Ticket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { booking } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(asyncgetBookingById(id));
  }, [dispatch, id]);

  if (!booking) {
    return (
      <div style={{ color: "#FFFFFF", textAlign: "center", marginTop: "20px" }}>
        Loading ticket details...
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#1F1E24",
        color: "#FFFFFF",
        maxWidth: "400px",
        margin: "20px auto",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Movie Poster & Title */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src={booking.data.movieId.posterUrl || ""}
          alt={booking.data.movieId.title || "Movie Poster"}
          style={{
            borderRadius: "10px",
            marginRight: "15px",
            maxWidth: "100px",
          }}
        />
        <div>
          <h3 style={{ margin: 0, color: "#FFFFFF" }}>
            {booking.data.movieId.title || "N/A"}
          </h3>
          <p style={{ margin: "5px 0", color: "#A5A5A5" }}>
            {booking.data.movieId.genre || "N/A"}
          </p>
        </div>
      </div>

      {/* Showtime Details */}
      <div
        style={{
          borderTop: "1px solid #A5A5A5",
          borderBottom: "1px solid #A5A5A5",
          padding: "10px 0",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          Showtime: <b>{booking.data.showtime || "N/A"}</b>
        </p>
        <p style={{ margin: "5px 0" }}>
          Theatre: <b>{booking.data.theatreId.name || "N/A"}</b>
        </p>
        <p style={{ margin: "5px 0" }}>
          Location: <b>{booking.data.theatreId.location || "N/A"}</b>
        </p>
      </div>

      {/* Seat & Booking Info */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ margin: "5px 0" }}>
          Seats: <b>{booking.data.seats || "N/A"}</b>
        </p>
        <p style={{ margin: "5px 0" }}>
          Booked by: <b>{booking.data.userId.name || "N/A"}</b>
        </p>
        <p style={{ margin: "5px 0" }}>
          Email: <b>{booking.data.userId.email || "N/A"}</b>
        </p>
      </div>

      {/* Payment Details */}
      <div
        style={{
          borderTop: "1px solid #A5A5A5",
          paddingTop: "10px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          Total Paid:{" "}
          <span style={{ color: "#6556CD" }}>
            ₹{booking.data.totalPrice || 0}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Ticket;
