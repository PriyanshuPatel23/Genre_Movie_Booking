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

const roleMiddleware = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while verifying user role",
    });
  }
};

module.exports = { authMiddleware, roleMiddleware };
