'use strict';
module.exports = (sequelize, DataTypes) => {
  const videoGames = sequelize.define('videoGames', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    esrb: DataTypes.STRING,
    whereToPurchase: DataTypes.STRING
  }, {});
  videoGames.associate = function(models) {
    // associations can be defined here
  };
  return videoGames;
};