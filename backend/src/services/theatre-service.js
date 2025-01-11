const { TheatreRepository, MovieRepository } = require("../Repository/index");
const theatrerepo = new TheatreRepository();
const movierepository = new MovieRepository();

class TheatreService {
  async createTheatre(theatreData) {
    try {
      const { name, location, seats, movies, showtimes, price } = theatreData;

      const movieArray = Array.isArray(movies) ? movies : [];
      const showArray = Array.isArray(showtimes) ? showtimes : [];

      const newTheatre = await theatrerepo.create({
        name,
        location,
        seats,
        movies: movieArray,
        showtimes: showArray,
        price,
      });

      await Promise.all(
        movieArray.map(async (movieId) => {
          const movie = await movierepository.findById(movieId);
          if (movie) {
            const newShowtime = { theatreId: newTheatre._id, time: showtimes };
            movie.showtimes.push(newShowtime);
            movie.theatres.push(newTheatre._id);
            await movie.save();
          }
        })
      );

      return newTheatre;
    } catch (error) {
      throw new Error(`Error creating theatre. Details: ${error.message}`);
    }
  }

  async getTheatres() {
    try {
      const theatre = await theatrerepo.findAll();
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async getTheatreById(theatreId) {
    try {
      const theatre = await theatrerepo.findById(theatreId);
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTheatre(theatreId, theatreData) {
    try {
      const { name, location, seats, movies, showtimes, price } = theatreData;

      const updatedTheatre = await theatrerepo.update(
        theatreId,
        { name, location, seats, movies, showtimes, price },
        { new: true }
      );

      if (!updatedTheatre) {
        throw new Error(`Theatre with ID ${theatreId} not found`);
      }

      await Promise.all(
        movies.map(async (movieId) => {
          const movie = await movierepository.findById(movieId);
          if (!movie) {
            throw new Error(`Movie with ID ${movieId} not found`);
          }

          const newShowtime = {
            theatreId: updatedTheatre._id,
            time: showtimes,
          };

          const existingShowtime = movie.showtimes.find(
            (showtime) => showtime.theatreId.toString() === theatreId.toString()
          );

          if (existingShowtime) {
            existingShowtime.time = showtimes;
          } else {
            movie.showtimes.push(newShowtime);
          }

          if (!movie.theatres.includes(theatreId)) {
            movie.theatres.push(theatreId);
          }

          await movie.save();
        })
      );

      return updatedTheatre;
    } catch (error) {
      throw new Error(`Error updating theatre: ${error.message}`);
    }
  }

  async deleteTheatre(theatreId) {
    try {
      const theatre = await theatrerepo.delete(theatreId);
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TheatreService;
