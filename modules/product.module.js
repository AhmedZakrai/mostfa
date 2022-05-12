const { default: mongoose } = require("mongoose");

const DB_ULR = "mongoose://localhost:27017";

const productSchema = mongoose.Schema({
  nam: String,
  price: Number,
  description: String,
  model: String,
  reviews: Number,
  brand: String,
  category: String,
  viewed: Number,
  image: String,
  images: String,
  imagesDescription: String,
});

const Product = mongoose.model("product", productSchema);

exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_ULR).then(() => {
      return Product.find({})
        .then((products) => {
          resolve(products);
          mongoose.disconnect();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

exports.getProduct = (categ) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_ULR).then(() => {
      return Product.find({ category: categ })
        .then((products) => {
          resolve(products);
          mongoose.disconnect();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

exports.getProductById = (id) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_ULR).then(() => {
      return Product.findById(id)
        .then((product) => {
          resolve(product);
          mongoose.disconnect();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

exports.insertProducts = () => {};

exports.updateProducts = () => {};

exports.deleteProduct = () => {};
