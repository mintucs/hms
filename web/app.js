var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var app = express();


app.use(express.bodyParser());

app.use(app.router);
app.get("/index",function(req,res) {
  
    res.send("i am index/GEt req ");
});

app.get("/index",function(req,res){
    res.sendfile("./index.html");
})

app.post("/",function(req,res)
   {
    

        var USERNAME = req.body.USERNAME ;
        var password = req.body.password ;
        
        res.send("USERNAME :"     +USERNAME+ 
                 "password : "    +password+ 
                
    }); 


http.createServer(app).listen(9200);
