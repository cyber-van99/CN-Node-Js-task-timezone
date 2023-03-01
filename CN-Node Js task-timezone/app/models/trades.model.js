const { DataTypes } = require("sequelize");
const {sequelize} = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    const trades = sequelize.define("trade",{
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true
        },
        type : {
            type : DataTypes.STRING,
            allowNull : false
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        symbol : {
            type : DataTypes.STRING,
            allowNull : false
        },
        shares : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    })

    return trades;

}