const { default: mongoose } = require("mongoose");

const DB_ULR = "mongodb://localhost/27017";

const cotegorySchema = mongoose.Schema({
  nam: String,
  id_branch: String, // value the zero to the main category
  descrpition: String, // to alerm descrpition
  mainCategory: String, // main name category
});

const Category = mongoose.model("category", cotegorySchema);

exports.getAllCategories = () => {};

exports.getCategory = () => {};

exports.insertCategory = () => {};

exports.updateCategory = () => {};

exports.deleteCategory = () => {};
