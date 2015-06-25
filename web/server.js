var fs = require("fs");
var lines = fs.readFileSync("3000").toString().split("\n");

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
                "First_Name": keys[0],
                "Last_Name": keys[1],
                "Email.Address": keys[2],
                "Set_A_Password": keys[3],
               
      }
    }, function (error, response) {
        console.log(error);
        console.log(response);

        

});
    


