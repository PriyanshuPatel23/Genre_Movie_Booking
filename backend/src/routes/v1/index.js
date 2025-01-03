const express = require("express");

const {
  signup,
  login,
  updatePassword,
  updateUser,
  getUserById,
  handleRequestPasswordReset,
  handleResetPassword,
} = require("../../controllers/user-controller");
const { authMiddleware } = require("../../middleware/auth-middleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/changePassword", authMiddleware, updatePassword);
router.put("/changeData", authMiddleware, updateUser);
router.get("/getuser", authMiddleware, getUserById);
router.post("/requestpasswordreset", handleRequestPasswordReset);
router.post("/resetpassword", handleResetPassword);

module.exports = router;
