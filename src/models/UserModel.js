const { DataTypes } = require("sequelize");
const { db } = require("../../db");

const User = db.define("User",{
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    full_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"user"
    },
    token:{
        type:DataTypes.TEXT,
        allowNull:true
    }


})

module.exports = User