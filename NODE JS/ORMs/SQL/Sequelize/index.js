const {Sequelize} = require('sequelize');

const sequelize = new Sequelize( 'nodejs', 'postgres','4477', {
    host: "localhost",
    dialect: "postgres"
});

async function xx()
{
try{
    await sequelize.authenticate();
    console.log("Connection established successfully!!");
}
catch(error){
   console.error("Unable to connect to the database!!", error)
}

}

xx()