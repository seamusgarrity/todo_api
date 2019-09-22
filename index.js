require("dotenv").config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require("body-parser");

var todoRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.use("/api/todos",todoRoutes);

app.get("/",function(req,res){
    res.sendFile("index.html");
})   

app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+process.env.PORT);
});