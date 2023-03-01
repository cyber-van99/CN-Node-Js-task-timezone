const dbConfig = require("./db.config.js");
const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  logging: true,
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
}
});

sequelize.authenticate()
.then(()=>{
  console.log('Connected...');
})
.catch(err=>{
  console.log(err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize; 
db.trades = require('../models/trades.model')(sequelize,DataTypes);

db.sequelize.sync({force : false});

module.exports = db;