const {
  BookingRepository,
  TheatreRepository,
  MovieRepository,
  userRepository,
} = require("../Repository/index");
const { ticketMail } = require("../utils/mail");
const bookingRepo = new BookingRepository();
const theatreRepo = new TheatreRepository();
const movieRepo = new MovieRepository();
const userRepo = new userRepository();

class BookingService {
  async createBooking(userId, data) {
    try {
      const { movieId, theatreId, showtime, seats } = data;
      const theatre = await theatreRepo.findById(theatreId);
      const movie = await movieRepo.findById(movieId);
      const user = await userRepo.findUser(userId);
      const mailmovie = movie.title;
      const mailtheatre = theatre.name;
      const email = user.email;

      if (!theatre || seats > theatre.seats) {
        console.log("Invalid data");
      }

      theatre.seats -= seats;
      await theatre.save();

      let totalPrice = theatre.price * seats;

      const newBooking = await bookingRepo.create({
        userId,
        movieId,
        theatreId,
        showtime,
        seats,
        totalPrice,
        paymentStatus: "completed",
      });

      const ticketlink = `http://localhost:5173/ticket/${newBooking._id}`;

      const response = await bookingRepo.findById(newBooking._id);
      await ticketMail(response, ticketlink);
      return newBooking;
    } catch (error) {
      console.log(error);
    }
  }

  async getBooking(bookingid) {
    try {
      const booking = await bookingRepo.findById(bookingid);
      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBooking(bookingid) {
    try {
      const booking = await bookingRepo.delete(bookingid);
      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePayment(id, paymentStatus) {
    try {
      const booking = await bookingRepo.findById(id);
      booking.paymentStatus = paymentStatus;
      await booking.save();
      return booking;
    } catch (error) {
      console.log(error);
    }
  }

  async getBookings() {
    try {
      const bookings = await bookingRepo.getAll();
      return bookings;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BookingService;
