var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();


app.use(express.bodyParser());

app.use(app.router);
app.get("/",function(req,res) {
  
    res.send("i am index/GEt req ");
});

app.get("/index",function(req,res){
    res.sendfile("./index.html");
})

app.post("/",function(req,res)
   {
    

        var First_Name = req.body.First_Name ;
        var Last_Name = req.body.Last_Name ;
        var Email_Address= req.body.Email_Address ;
        var Set_A_Password = req.body.Set_A_Password ;
        res.send("First_Name :"        +First_Name+ 
                 "Last_Name : "        +Last_Name+ 
                 "Email_Address :"     +Email_Address+ 
                 "Set_A_Password :"    +Set_A_Password);
    }); 


http.createServer(app).listen(3000);
