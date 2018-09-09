var express = require('express');
var app = express();




app.get('/', function (req, res) {
    
    console.log("Got a GET request for the homepage");
    res.sendFile( __dirname + "/index.html" )
   
  })

app.get('/getdata/:id', function (req, res) {

    
    
  console.log("Got a JSON request for the homepage with parameter");
  console.log(req.params.id);
  
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/';
  var data;
  MongoClient.connect(url, function(err,client) {
      var db=client.db('test');
      const collection=db.collection("dishes");
      
          collection.find({"name":"Annkush"}).toArray((err,docs)=>{
              data=docs;
              console.log((docs));
                res.send({"data":data})
          })
      
  }); 
  
 
})

var server = app.listen(8082, function () {

    var host = server.address().address
    var port = server.address().port
 
    console.log("dashboard app listening at http://%s:%s", host, port)
 })