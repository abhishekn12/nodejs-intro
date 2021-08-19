const express = require("express");

const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);
    var result = number1+number2;

    res.send("result of the request is "+result);
});


app.get("bmicalculator",function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("bmicalculator",function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);
    res.send("your bmi is " +bmi);
});
app.listen(3000,function () {
    console.log("listening on port 3000");
});