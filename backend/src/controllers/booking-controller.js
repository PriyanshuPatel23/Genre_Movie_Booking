const { BookingService } = require("../services/index");

const bookingService = new BookingService();

const bookTicket = async (req, res) => {
  try {
    const id = req.user;
    const booking = await bookingService.createBooking(id, req.body);
    return res.status(200).json({
      success: true,
      data: booking,
      message: "Ticket booked successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to book ticket",
      err: error,
    });
  }
};

const cancelTicket = async (req, res) => {
  try {
    const booking = await bookingService.deleteBooking(req.params.id);
    return res.status(200).json({
      success: true,
      data: booking,
      message: "Ticket cancelled successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to cancel ticket",
      err: error,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getBooking();
    return res.status(200).json({
      success: true,
      data: bookings,
      message: "Bookings fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to fetch bookings",
      err: error,
    });
  }
};

const paymentStatus = async (req, res) => {
  try {
    const bookings = await bookingService.updatePayment(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      success: true,
      data: bookings,
      message: "Payment status updated successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to update",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const booking = await bookingService.getBookings();
    return res.status(200).json({
      success: true,
      data: booking,
      message: "All bookings fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to fetch all bookings",
      err: error,
    });
  }
};

const getBookingsByid = async (req, res) => {
  try {
    const booking = await bookingService.getBooking(req.params.id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: booking,
      message: "Booking fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "Failed to fetch booking",
      err: error,
    });
  }
};

module.exports = {
  bookTicket,
  cancelTicket,
  getBookings,
  paymentStatus,
  getAll,
  getBookingsByid,
};
