const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  nam: String,
  emaile: String,
});

const User = mongoose.model("user", userSchema);

exports.getAllUsers = () => {};
exports.getUserByName = (name) => {};
exports.getUserByEmail = (email) => {};
exports.createUser = () => {};
exports.editeUser = () => {};
