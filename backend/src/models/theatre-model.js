const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    seats: { type: Number, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    showtimes: [
      {
        movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
        time: [String],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theatre", theatreSchema);
