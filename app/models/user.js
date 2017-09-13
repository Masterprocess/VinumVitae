
const bcrypt = require('bcrypt-node');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            validate: { len: [6,20] }
        },
        password: {
            type: DataTypes.STRING,
            validate: { len: [8,120]}
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [1,120],
            },
            defaultValue: "Pretentious Wine Collector Number 87"
        }
    })

    User.associate = (models) => {
        
        User.hasMany(models.Cellar, {
            onDelete: "CASCADE"
        }),
        User.hasMany(models.Cooler, {
            onDelete: "CASCADE"
        })
    }

    return User;
}