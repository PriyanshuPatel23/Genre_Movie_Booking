const express = require("express");
const {
  createUser,
  login,
  updatePassword,
  updateUser,
} = require("../../controllers/user-controller");
const authMiddleware = require("../../middleware/auth-middleware");

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);
router.put("/changePassword", authMiddleware, updatePassword);
router.put("/changeData", authMiddleware, updateUser);

module.exports = router;
