const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/images/404.svg", (req, res) => {
  res.sendFile(__dirname + "/images/404.svg")
})

app.use(function (req, res, next){
  res.status(404).sendFile(__dirname + "/error.html");
});

app.listen(3000, () => {
  console.log("Ready")
})