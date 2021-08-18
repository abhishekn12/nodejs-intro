const express = require('express');


const app = express();

app.get("/home", function (req, res) {
    res.send("hello world");
});

app.listen(3000,function (req, res) {
    console.log("listening on port 3000");
});