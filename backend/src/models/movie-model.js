const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    posterUrl: { type: String, required: true },
    theatres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theatre" }],
    showtimes: [
      {
        theatreId: { type: mongoose.Schema.Types.ObjectId, ref: "Theatre" },
        time: [String],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
