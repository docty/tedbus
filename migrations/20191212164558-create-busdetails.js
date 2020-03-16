'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Busdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {         // User hasMany WorkingDays n:n
          model: 'Users',
          key: 'userId'
        }
      },
      busId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      busname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bustype: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nop: {
        allowNull: false,
        type: Sequelize.STRING
      },
      luggage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addIndex('Busdetails', ['userId']));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Busdetails');
  }
};
