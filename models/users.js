'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    surname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    contact: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};