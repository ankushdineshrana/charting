var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err,client) {
    var db=client.db('test');
    const collection=db.collection("dishes");
    collection.insertOne({"name":"Annkush"},(err,result)=>{
        collection.find({"name":"Annkush"}).toArray((err,docs)=>{
            console.log(docs);
        })
    });
}); 