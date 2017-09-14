module.exports = (sequelize, DataTypes) => {
    var Wine = sequelize.define('newWine', {
        WineName: {
            type: DataTypes.STRING
        },
        WineDescription: {
            type: DataTypes.TEXT
        }

    })