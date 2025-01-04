const express = require("express");

const {
  usercontroller,
} = require("../../controllers/index");
const { authMiddleware } = require("../../middleware/auth-middleware");

const router = express.Router();

router.post("/signup", usercontroller.signup);
router.post("/login", usercontroller.login);
router.get("/getuser", authMiddleware, usercontroller.getUserById);
router.put("/changePassword", authMiddleware, usercontroller.updatePassword);
router.put("/changeData", authMiddleware, usercontroller.updateUser);
router.post("/requestpasswordreset", usercontroller.handleRequestPasswordReset);
router.post("/resetpassword", usercontroller.handleResetPassword);

module.exports = router;
