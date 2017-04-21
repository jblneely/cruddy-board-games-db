'use strict';
module.exports = function(sequelize, DataTypes) {
    var game = sequelize.define('game', {
        gameName: DataTypes.STRING,
        description: DataTypes.TEXT,
        numberOfPlayers: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here

            }
        }
    });
    return game;
};
