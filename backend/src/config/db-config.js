const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server-config");

const connect = async () => {
  await mongoose.connect(MONGODB_URI),
    { useNewUrlParser: true, useUnifiedTopology: true };
};

module.exports = connect;
