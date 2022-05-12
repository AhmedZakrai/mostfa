const express = require("express");
const path = require("path");
const homeRouting = require("./routers/home.router");
const addminRouting=require('./routers/addmin.router')

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");



app.use('/ulter/addmin',addminRouting)

app.use("/ulter", homeRouting);

app.listen(3000, (err) => {
  console.log("server port is 3000");
});
