const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  SALT: parseInt(process.env.SALT),
  PORT: process.env.PORT,
};