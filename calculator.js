const express = require("express");

const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var number1 = req.body.number1;
    var number2 = req.body.number2;
    var result = number1+number2;

    res.send("result of the request is "+result);
});

app.listen(3000,function () {
    console.log("listening on port 3000");
});