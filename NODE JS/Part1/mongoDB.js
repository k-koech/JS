const { Collection } = require("mongodb");

var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    // -------------Already exists- You run it once--------------
    // dbo.createCollection("customers", function(err, res){
    //     if(err) throw err;
    //     console.log("Collection Created");    
// });

    // Insert One value - commented out because it has already been inserted
        // var myObj = {name: "Kelvin", address: "987 JKIA"};
        // dbo.collection("customers").insertOne(myObj, function(err, res){
        //     if(err) throw err;

        //     console.log("1 doc inserted successfully");
        // });

    // Insert Many 
        // var manyObj = [{name: "NJOROO", address: "Rongai"}, {name: "Michael", address: "XXX Runda"}];
        // dbo.collection("customers").insertMany(manyObj, function(err, res){
        //     if(err) throw err;

        //     console.log(`${res.insertedCount} docs inserted successfully`);
        // });

    // Findone
        dbo.collection("customers").findOne({},function(err, res){
            if(err) throw err;

            console.log(res.name);
            // db.close();
        })

    // Find Many
        dbo.collection("customers").find({}).limit(2).toArray(function(err, res){
            if(err) throw err;

            console.log(res);
            // db.close();
        });
    
    // FindSome - only shows those with 1 in projection
        // dbo.collection("customers").find({}, {projection: {_id:0, address: 0} 
        // }).toArray(function(err, res){
        //     if(err) throw err;

        //     console.log(res[3].name);
        // });

    // QUERY
        // var query = { name: "NJOROO"}
        // dbo.collection("customers").find(query).toArray(function(err, res){
        //     if(err) throw err;

        //     console.log("QUERY ",res);
        // });

    // FILTER WITH REQULAR EXPRESSION - starts with letter N
        // var query = { address: /^R/}
        // dbo.collection("customers").find(query).toArray(function(err, res){
        //     if(err) throw err;

        //     console.log("QUERY ",res);
        // });
    
    // UPDATE 
        var myQuery = { name: "Kelvin"}
        var newValues = { $set: {name: "KOECH", address: "kakuma"} }
        dbo.collection("customers").updateOne(myQuery,newValues, function(err, res){
            if(err) throw err;
            console.log("1 document updated");
        });
    
    // Delete One
        // var query = { address: /^R/}
        // dbo.collection("customers").deleteOne(query, function(err, res){
        //     if(err) throw err;

        //     console.log("1 doc deleted");
        // });
    

});