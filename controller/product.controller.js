const productModul = require("../modules/product.module");

exports.getAllProducts = (req, res, next) => {
  // productModul.getAllProducts().then((prodect) => {
  //   res.render("prodect", { prodect });
  // });
  res.render("addmin/product/product");
};

exports.getProductDetiles = (req, res, next) => {
  productModul.getProductById(req.params.id).then((prodect) => {
    res.render("prodect", { prodect });
  });
};

exports.addProduct = (req, res, next) => {
  res.render("addmin/product/add_product");
};

exports.addUpProduct = (req, res, next) => {
  productModul.insertProducts(
      req.body.name,
      req.body.price,
      req.body.description,
      req.body.model,
      req.body.reviews,
      req.body.brand,
      req.body.category,
      req.body.viewed,
      req.files.image[0].originalname,
      req.files.images
    );
      res.redirect("/ulter/addmin/products/add")
};

exports.editProduct=(req,res,next)=>{ res.render("addmin/product/edit_product");}

exports.editUpProduct=(req,res,next)=>{ res.redirect("/ulter/addmin/products/edit");}

exports.removeProduct=(req,res,next)=>{ res.render("addmin/product/remove_product");}

exports.removeUpProduct=(req,res,next)=>{ res.redirect("/ulter/addmin/products/remove");}