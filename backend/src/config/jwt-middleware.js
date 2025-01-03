const JWT = require("passport-jwt");
const { JWT_SECRET } = require("./server-config");
const User = require("../models/user-model");

const jwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

const PassportAuth = (passport) => {
  passport.use(
    new jwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};

module.exports = PassportAuth;
