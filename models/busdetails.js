'use strict';
module.exports = (sequelize, DataTypes) => {
  const Busdetails = sequelize.define('Busdetails', {
    userId : DataTypes.STRING,
    busId : DataTypes.STRING,
    busname: DataTypes.STRING,
    bustype: DataTypes.STRING,
    price: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    pip: DataTypes.STRING,
    nop: DataTypes.STRING,
    luggage: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Busdetails.associate = function(models) {
    // associations can be defined here
    Busdetails.belongsTo(models.Users, {
      foreignKey: 'userId',
      targetKey : 'userId'
    });

  };
  return Busdetails;
};
