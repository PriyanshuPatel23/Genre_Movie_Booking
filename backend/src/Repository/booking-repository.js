const Booking = require("../models/booking-model");

class BookingRepository {
  async create(bookingData) {
    try {
      const booking = await Booking.create(bookingData);
      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(bookingId) {
    try {
      const booking = await Booking.findById(bookingId)
        .populate("userId")
        .populate("movieId")
        .populate("theatreId");

      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const booking = await Booking.findByIdAndDelete(id);
      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const bookings = await Booking.find()
        .populate("userId", "name email")
        .populate("movieId", "title genre")
        .populate("theatreId", "name location");

      return bookings;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BookingRepository;
