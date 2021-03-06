//jshint esversion:6
const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//**CALCULATOR**
app.get("/", function(require, response){
  response.sendFile(__dirname+"/index.html");
});

app.post("/", function(require, response){

  num1 = require.body.num1;
  num2 = require.body.num2;

  result = parseInt(num1) + parseInt(num2);

  response.send("The result of the calculation is : "+result.toString());

});


//**BMI CALCULATOR**

app.get("/bmiCalculator", function(require, response){
  response.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(require, response){

  wei = Number(require.body.weight);
  hei = Number(require.body.height);

  bmi = wei/Math.pow(hei,2);

  response.send("Your BMI is : "+bmi.toString());

});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
