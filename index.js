require("dotenv").config();

var express = require('express'),
    app = express();

var todoRoutes = require('./routes/todos')


app.use("/api/todos",todoRoutes);

app.get("/",function(req,res){
     res.send("Hello from the root route");
})   

app.listen(process.env.PORT, function(){
    console.log("App is running on port: "+process.env.PORT);
});