const { MovieRepository, TheatreRepository } = require("../Repository/index");
const movierepo = new MovieRepository();
const theatrerepo = new TheatreRepository();

class MovieService {
  async createMovie(movieData) {
    try {
      const { title, genre, description, posterUrl, theatres, showtimes } =
        movieData;

      const newMovie = await movierepo.create({
        title,
        genre,
        description,
        posterUrl,
        theatres,
        showtimes,
      });

      for (let theatreId of theatres) {
        const theatre = await theatrerepo.findById(theatreId);
        if (!theatre) {
          throw new Error(`Theatre with ID ${theatreId} not found`);
        }

        const newShowtime = showtimes.find(
          (showtime) => showtime.theatreId.toString() === theatreId.toString()
        );

        if (newShowtime) {
          theatre.showtimes.push({
            movieId: newMovie._id,
            time: newShowtime.time,
          });
          theatre.movies.push(newMovie._id);
          await theatre.save();
        }
      }

      return newMovie;
    } catch (error) {
      throw new Error(`Error creating movie. Details: ${error.message}`);
    }
  }

  async getMovies() {
    try {
      const movie = await movierepo.findAll();
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async getMovieById(movieId) {
    try {
      const movie = await movierepo.findById(movieId);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }

  async updateMovie(movieId, movieData) {
    try {
      const { title, genre, description, posterUrl, theatres, showtimes } =
        movieData;

      const updatedMovie = await movierepo.update(
        movieId,
        { title, genre, description, posterUrl },
        { new: true }
      );

      if (!updatedMovie) {
        throw new Error(`Movie with ID ${movieId} not found`);
      }

      if (theatres && Array.isArray(theatres)) {
        await Promise.all(
          theatres.map(async (theatreId) => {
            const theatre = await theatrerepo.findById(theatreId);
            if (!theatre) {
              throw new Error(`Theatre with ID ${theatreId} not found`);
            }

            const newShowtime = showtimes?.find(
              (showtime) =>
                showtime.theatreId.toString() === theatreId.toString()
            );

            const existingShowtime = theatre.showtimes.find(
              (showtime) => showtime.movieId.toString() === movieId.toString()
            );

            if (existingShowtime) {
              existingShowtime.time = newShowtime ? newShowtime.time : [];
            } else if (newShowtime) {
              theatre.showtimes.push({
                movieId: movieId,
                time: newShowtime.time,
              });
            }

            if (!theatre.movies.includes(movieId)) {
              theatre.movies.push(movieId);
            }

            await theatre.save();
          })
        );
      }

      return updatedMovie;
    } catch (error) {
      throw new Error(`Error updating movie: ${error.message}`);
    }
  }

  async deleteMovie(movieId) {
    try {
      const movie = await movierepo.delete(movieId);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MovieService;
