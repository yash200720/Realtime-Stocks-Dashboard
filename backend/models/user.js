const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  mail: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
