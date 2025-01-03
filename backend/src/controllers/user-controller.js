const userService = require("../services/user-service");

const userservice = new userService();

const signup = async (req, res) => {
  try {
    const user = await userservice.signup({
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

const getUserById = async (req, res) => {
  try {
    const user = await userservice.getUserById(req.user.id);
    return res.status(200).json({
      message: "User fetched successfully",
      data: user,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "User not fetched successfully",
      data: {},
      success: false,
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

const handleRequestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await userservice.requestPasswordReset(email);
    return res.status(200).json({
      data: response,
      message: "Reset password request sent successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(200).json({
      data: {},
      message: "Reset password request sent successfully",
      success: false,
      err: error,
    });
  }
};

const handleResetPassword = async (req, res) => {
  try {
    const { userId, resetToken, newPassword } = req.body;
    const response = await userservice.resetPassword(
      userId,
      resetToken,
      newPassword
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
  updatePassword,
  updateUser,
  getUserById,
  handleRequestPasswordReset,
  handleResetPassword,
};
