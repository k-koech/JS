// var http =  require("http")
// var pg = require("pg")

// var con = pg.createConnection({
//     host: "localhost",
//     user: "triplek",
//     password: 4477
// })

// con.connect(function(err){
//     if(err) throw err
//     console.log("Connected");
// })

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nodejs',
  password: '4477',
  port: 5432,
})

client.connect(function(err)
{
  if (err) throw err;
  console.log("Connected!");

  var id_sql = "ALTER TABLE  customers ADD COLUMN IF NOT EXISTS id INT";
  client.query(id_sql, function(err, result){
       if(err) throw err;
       console.log("Column Created");
  });

//   var add_sql = "INSERT INTO  customers(name, address) Values('Mike', 'XXXX')";
//   client.query(add_sql, function(error, res){
//     if(error) throw error;
//     console.log(`${res.rowCount} row inserted` )
//   });

  var fetch_sql = "SELECT name, address FROM customers WHERE name='Mike' ORDER BY address ";
  client.query(fetch_sql, function(error, res){
    if(error) throw error;
    console.log(`Customers `, res.rows)
  });
  //Update
  var update_sql = "UPDATE customers SET address='Dodom' WHERE address='Limuru' ";

  client.query(update_sql, function(error, res){
    if(error) throw error;
    console.log(`Updated`, res.rows)
  });

  //Delete
  var del_sql = "DELETE FROM customers WHERE name='KELVIN' ";

  client.query(del_sql, function(error, res){
    if(error) throw error;
    console.log(`Delete`, res.rows)
  });


  var fetch_sql = "SELECT * FROM customers ";
  client.query(fetch_sql, function(error, res){
    if(error) throw error;
    console.log(`Updated Customers `, res.rows)
  });
});