// jshint es v6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World</h1>")
})

app.get("/about", function(req, res){
  res.send("Hey i am from Nigeria")
})


app.get("/contact", function(req, res) {
  res.send("You can keep in touch with me on idrismuhd41@gmail.com")
})

app.get("/server", function(req, res){
  res.sendFile(__dirname + "/server.html");
})

app.get("/calculator", function(req,res){
  res.sendFile(__dirname + "/calculator.html")
})

app.post("/calculator", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result is " + result)
})

app.listen(3000, function () {
  console.log("Server is listen to port 3000");
});
