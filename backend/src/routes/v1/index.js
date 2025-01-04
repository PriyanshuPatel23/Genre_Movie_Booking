const express = require("express");

const {
  userController,
} = require("../../controllers/index");
const { authMiddleware } = require("../../middleware/auth-middleware");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/getuser", authMiddleware, userController.getUserById);
router.put("/changePassword", authMiddleware, userController.updatePassword);
router.put("/changeData", authMiddleware, userController.updateUser);
router.post("/requestpasswordreset", userController.handleRequestPasswordReset);
router.post("/resetpassword", userController.handleResetPassword);

module.exports = router;
