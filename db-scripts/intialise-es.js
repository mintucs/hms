var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host:  [
    {
      host: 'http://localhost:9200',
      auth: 'user:password'
    }
  ],
  log: {
    type: 'file',
    level: 'trace',
    //path: '/var/log/elasticsearch.log'
  }
});



var create_promise = client.indices.create({index: "users" });
create_promise.then(function(x) {
    console.log(x);
}, function(err) { console.log(err);});


var create_promise = client.indices.putMapping({"users": {
        "properties" : {
            "USERNAME {"type" : "string", "store" : true },
               "Password" : {"type" : "string""store" : true },
               
               "access_tokens" : { "enabled" : true},
               
               "tag": {"type":     "string", "index":    "not_analyzed"}
    }
        },
        "users" : {
        "expire" : { "enabled" : true,"default" : "366" }
    }
    
});
create_promise.then(function(x) {
    console.log(x);
}, function(err) { console.log(err);
}); 
