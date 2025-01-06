const Movie = require("../models/movie-model");

class MovieRepository {
  async create(movieData) {
    try {
      const movie = await Movie.create(movieData);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(movieId) {
    try {
      const movie = await Movie.findById(movieId).populate("theatres");
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const movie = await Movie.find().populate("theatres");
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async update(movieId, updateData) {
    try {
      const movie = await Movie.findByIdAndUpdate(movieId, updateData, {
        new: true,
      });
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(movieId) {
    try {
      const movie = await Movie.findByIdAndDelete(movieId);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MovieRepository;
