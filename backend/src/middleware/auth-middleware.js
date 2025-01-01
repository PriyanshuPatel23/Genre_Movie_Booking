const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server-config");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token is invalid or missing",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Token is not available",
    });
  }
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

module.exports = authMiddleware;
