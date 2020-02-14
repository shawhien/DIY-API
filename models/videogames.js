'use strict';
module.exports = (sequelize, DataTypes) => {
  const videoGames = sequelize.define('videoGames', {
    Name: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ESRB: DataTypes.STRING,
    whereToPurchase: DataTypes.STRING
  }, {});
  videoGames.associate = function(models) {
    // associations can be defined here
  };
  return videoGames;
};