'use strict';
module.exports = (sequelize, DataTypes) => {
  const Busdetails = sequelize.define('Busdetails', {
    busname: DataTypes.STRING,
    bustype: DataTypes.STRING,
    price: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    pip: DataTypes.STRING,
    nop: DataTypes.STRING,
    luggage: DataTypes.STRING
  }, {});
  Busdetails.associate = function(models) {
    // associations can be defined here
  };
  return Busdetails;
};