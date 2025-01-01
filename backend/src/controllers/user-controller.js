const userService = require("../services/user-service");

const userservice = new userService();

const createUser = async (req, res) => {
  try {
    const user = await userservice.createUser({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(200).json({
      message: "User created successfully",
      data: user,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User not created successfully",
      data: {},
      success: true,
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const response = await userservice.login({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      message: "User logged in successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "User not logged in successfully",
      data: {},
      success: true,
      err: error,
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;
    const response = await userservice.changePassword(
      userId,
      oldPassword,
      newPassword
    );
    return res.status(200).json({
      message: "Password updated successfully",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Password not updated successfully",
      data: {},
      success: false,
      err: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userid = req.user.id;
    const updatedData = req.body;

    const updatedUser = await userservice.updateUser(userid, updatedData);
    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "User not updated successfully",
      data: {},
      success: false,
      err: error,
    });
  }
};

module.exports = {
  createUser,
  login,
  updatePassword,
  updateUser,
};