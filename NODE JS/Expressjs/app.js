const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/student", (req, res)=>{
    var id = req.query.id
    res.send("Welcome back student "+id);
})

app.get("/student/:id", (req, res)=>{
    var id = req.params.id;
    res.send("Welcome back student number " + id);
})


app.listen(8000, function(req, res){
    console.log(`Running. . . on port http://localhost:9000`);
})