const { TheatreService } = require("../services/index");
const theatreservice = new TheatreService();

const getTheatres = async (req, res) => {
  try {
    const theatres = await theatreservice.getTheatres();
    return res.status(200).json({
      success: true,
      theatres,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createTheatres = async (req, res) => {
  try {
    const { name, location, seats, movies, showtimes, price } = req.body;
    const theatre = await theatreservice.createTheatre({
      name,
      location,
      seats,
      movies,
      showtimes,
      price,
    });
    return res.status(201).json({
      success: true,
      theatre,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getTheatreById = async (req, res) => {
  try {
    const theatre = await theatreservice.getTheatreById(req.params.id);
    if (!theatre) {
      return res.status(404).json({
        success: false,
        message: "Theatre not found",
      });
    }
    return res.status(200).json({
      success: true,
      theatre,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateTheatreById = async (req, res) => {
  try {
    const theatre = await theatreservice.updateTheatre(req.params.id, req.body);
    if (!theatre) {
      return res.status(404).json({
        success: false,
        message: "Theatre not found",
      });
    }
    return res.status(200).json({
      success: true,
      theatre,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteTheatreById = async (req, res) => {
  try {
    const theatre = await theatreservice.deleteTheatreById(req.params.id);
    if (!theatre) {
      return res.status(404).json({
        success: false,
        message: "Theatre not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getTheatres,
  createTheatres,
  getTheatreById,
  updateTheatreById,
  deleteTheatreById,
};
