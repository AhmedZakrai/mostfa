const route = require("express").Router();
const multer = require("multer");
const homeController = require("../controller/home.controller");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

route.get("/",  homeController.getHome);

module.exports = route;


// const multer = require("multer");

// app.post("/test", multer({storage: multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// }) }).fields([{name:"image",maxCount:1},{name:"image-product",maxCount:10}]), (req, res) => {
//   console.log(req.body);
//   console.log(req.files);
//   res.redirect("/test");
// });