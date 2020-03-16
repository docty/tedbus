'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId : DataTypes.STRING,
    surname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    
    Users.hasMany(models.Busdetails, {
        foreignKey: 'userId',
        sourceKey : 'userId'
      });
  };
  return Users;
};
