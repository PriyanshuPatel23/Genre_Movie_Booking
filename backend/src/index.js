const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const connect = require("./config/db-config");
const apiroutes = require("./routes/index");
const { PORT } = require("./config/server-config");
const PassportAuth = require("./config/jwt-middleware");

const app = express();

PassportAuth(passport);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(passport.initialize());

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api", apiroutes);

app.listen(PORT, async () => {
  console.log(`Server is listening on ${PORT}`);
  await connect();
  console.log("MongoDb connected");
});
