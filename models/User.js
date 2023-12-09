const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('poldb5', 'root', 'Javalinux8!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    // Options object for defining additional configurations, including the table name
    tableName: 'user', // Set the table name to 'user' (singular form)
});

// You can then synchronize the model with the database
sequelize.sync();



/*
const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
   */
module.exports = User;
