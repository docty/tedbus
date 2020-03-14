'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contactus = sequelize.define('Contactus', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  Contactus.associate = function(models) {
    // associations can be defined here
  };
  return Contactus;
};