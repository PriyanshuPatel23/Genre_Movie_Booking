const Theatre = require("../models/theatre-model");

class TheatreRepository {
  async create(theatreData) {
    try {
      const theatre = await Theatre.create(theatreData);
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(theatreId) {
    try {
      const theatre = await Theatre.findById(theatreId).populate("movies");
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const theatre = await Theatre.find().populate("movies");
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async update(theatreId, updateData) {
    try {
      const theatre = await Theatre.findByIdAndUpdate(theatreId, updateData, {
        new: true,
      });
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(theatreId) {
    try {
      const theatre = await Theatre.findByIdAndDelete(theatreId);
      return theatre;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TheatreRepository;
