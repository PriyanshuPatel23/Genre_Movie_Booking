const userRepository = require("../Repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT, JWT_SECRET } = require("../config/server-config");

const userrepository = new userRepository();

class userService {
  async signup(data) {
    try {
      data.password = await bcrypt.hash(data.password, SALT);
      const result = await userrepository.signup(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async login(data) {
    try {
      const user = await userrepository.login(data.email);
      if (!user) {
        throw new Error("User not found");
      }
      const validpassword = await bcrypt.compare(data.password, user.password);
      if (!validpassword) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: "30d",
      });

      return { token, user };
    } catch (error) {
      console.log(error);
    }
  }

  async changePassword(userid, currentpassword, newPassword) {
    try {
      const user = await userrepository.findUser(userid);
      if (!user) {
        throw new Error("User not found");
      }

      const isMatch = await bcrypt.compare(currentpassword, user.password);
      if (!isMatch) {
        throw new Error("Incorrect current password");
      }

      const hashPassword = await bcrypt.hash(newPassword, SALT);
      const updatedUser = await userrepository.updatePassword(
        userid,
        hashPassword
      );

      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
      const user = await userrepository.findUser(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(userid, updatedData) {
    try {
      const result = await userrepository.updateUser(userid, updatedData);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = userService;
