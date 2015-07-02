var fs = require("fs");
var lines = fs.readFileSync("9200").toString().split("\n");

var keys = lines[0].split(",");

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
 

    client.index({
      index: 'hms',
      type: 'hms',
      id: values[0],      
        
      body: {
                "USERNAME ": keys[0],
                "PASSWORD": keys[1],
               
               
      }
    }, function (error, response) {
        console.log(error);
        console.log(response);

        

});
    


