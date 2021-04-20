'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ressources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors',
          key: 'id'
        }
      },
      // categoryId: {
      //   type: Sequelize.INTEGER
      // },
      // locationId: {
      //   type: Sequelize.INTEGER
      // },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ressources');
  }
};
