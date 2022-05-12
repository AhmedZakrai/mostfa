const categoryModel = require("../modules/category.module");


exports.getAllCategory = (req, res, next) => {
  // productModul.getAllProducts().then((prodect) => {
  //   res.render("prodect", { prodect });
  // });
  res.render("addmin/categories/category");
};

exports.getCategoryDetiles = (req, res, next) => {
  // productModul.getProductById(req.params.id).then((category) => {
    // res.render("addmin/categories/category", { category });
  // });
  res.render("addmin/categories/category");
};

exports.addCategory = (req, res, next) => {
  res.render("addmin/categories/add_category");
};

exports.addUpCategory = (req, res, next) => {
  categoryModel.insertCategory(
    req.body.name,
    req.body.idBrinch,
    req.body.descrpition,
    req.body.mainCategory
  );
  res.redirect('/ulter/addmin/categories/add_category')
};

exports.editCategory=(req,res,next)=>{ res.render("addmin/categories/edit_category");}

exports.editUpCategory=(req,res,next)=>{ res.redirect("/ulter/addmin/categories/edit");}

exports.removeCategory=(req,res,next)=>{ res.render("addmin/categories/remove_category");}

exports.removeUpCategory=(req,res,next)=>{ res.redirect("/ulter/addmin/categories/remove");}