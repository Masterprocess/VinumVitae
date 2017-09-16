    module.exports = (sequelize, DataTypes) => {
        var Wine = sequelize.define('Wine', {
            wineName: {
                type: DataTypes.STRING
                },
            wineCode: {
                type: DataTypes.TEXT,
                allowNull:false
            },
            wineLink: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            winePrice: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            wineRegion: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineRank: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineType: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineVarietal: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineVintage: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineWinery: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineWineryID: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            wineImage: {
                type: DataTypes.TEXT,
                allowNull: true
            }

               
        })
    
        /*Wine.associate = (models) => {
            Wine.belongsTo(models.user, {
                foreignKey: {
                    allowNull: false,
                }
            })
        }*/
        return Wine;
    }