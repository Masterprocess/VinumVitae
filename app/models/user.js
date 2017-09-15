
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
        }
    })

    User.associate = (models) => {
        
        User.hasMany(models.Cellar, {
            onDelete: "CASCADE"
        }),
    }

    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    return User;
}