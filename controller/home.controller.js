const productModul = require("../modules/product.module");

exports.getHome = (req, res) => {
 res.render("index");
};

// let category = req.query.category;
// let productPromise;
// if (category) {
//   productPromise = productModul.getProduct(category);
// } else {
//   productPromise = productModul.getAllProducts();
// }

// productPromise.then((product) => {
//   res.render("index", { product: product });
// });
