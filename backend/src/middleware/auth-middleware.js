const passport = require("passport");

const authMiddleware = (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  })(req, res, next);
};

const roleMiddleware = (allowedRoles) => (req, res, next) => {
  try {
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while verifying user role",
    });
  }
};

module.exports = { authMiddleware, roleMiddleware };
