var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

run = function(configuration){
    console.log("initisling es");
}
    client.indices.create({ index: 'myindex'},
function (error, response) {
  // ...
});
    
client.indices.putMapping({ index: 'myindex'},
function (error, response) {
  // ...
});
module.exports = run
