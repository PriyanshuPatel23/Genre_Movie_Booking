const { movieService } = require("../services/index");
const movieservice = new movieService();

const createMovie = async (req, res) => {
  try {
    const { title, genre, description, posterUrl, theatres, showtimes } =
      req.body;
    const movie = await movieservice.createMovie({
      title,
      genre,
      description,
      posterUrl,
      theatres,
      showtimes,
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await movieservice.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await movieservice.getMovieById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await movieservice.updateMovie(
      req.params.id,
      req.body
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    await movieservice.deleteMovie(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
