require("dotenv").config();

var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000,
    bodyParser = require("body-parser");

var todoRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/todos",todoRoutes);

app.get("/",function(req,res){
     res.send("Hello from the root route");
})   

app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+process.env.PORT);
});