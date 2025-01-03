const User = require("../models/user-model");

class userRepository {
  async signup(userdata) {
    try {
      const result = await User.create(userdata);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email) {
    try {
      const result = await User.findOne({ email });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updateResetToken(userid, resetToken, resetTokenExpiry) {
    try {
      const result = await User.findByIdAndUpdate(userid, {
        resetToken,
        resetTokenExpiry,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePassword(userId, newPassword) {
    try {
      const result = await User.findByIdAndUpdate(
        userId,
        { password: newPassword },
        { new: true }
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async findUser(userid) {
    try {
      const result = await User.findById(userid);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(userid, updatedData) {
    try {
      const result = await User.findByIdAndUpdate(userid, updatedData, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = userRepository;
