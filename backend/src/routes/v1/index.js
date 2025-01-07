const express = require("express");

const {
  userController,
  movieController,
  theatreController,
} = require("../../controllers/index");
const {
  authMiddleware,
  roleMiddleware,
} = require("../../middleware/auth-middleware");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/getuser", authMiddleware, userController.getUserById);
router.put("/changePassword", authMiddleware, userController.updatePassword);
router.put("/changeData", authMiddleware, userController.updateUser);
router.post("/requestpasswordreset", userController.handleRequestPasswordReset);
router.post("/resetpassword", userController.handleResetPassword);

// Movie routes

router.post(
  "/movie",
  authMiddleware,
  roleMiddleware,
  movieController.createMovie
);
router.get("/movie", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieById);
router.put(
  "/movie/:id",
  authMiddleware,
  roleMiddleware,
  movieController.updateMovie
);
router.delete(
  "/movie/:id",
  authMiddleware,
  roleMiddleware,
  movieController.deleteMovie
);

// Theatre routes

router.post(
  "/theatre",
  authMiddleware,
  roleMiddleware,
  theatreController.createTheatres
);
router.get("/theatre", theatreController.getTheatres);
router.get("/theatre/:id", theatreController.getTheatreById);
router.put(
  "/theatre/:id",
  authMiddleware,
  roleMiddleware,
  theatreController.updateTheatreById
);
router.delete(
  "/theatre/:id",
  authMiddleware,
  roleMiddleware,
  theatreController.deleteTheatreById
);

module.exports = router;
