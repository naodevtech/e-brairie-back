'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Authors',
      [
        {
          name: 'J.K Rowlling'
        },
        {
          name: 'Victor Hugo'
        },
        {
          name: 'Napoleon Hill'
        },
        {
          name: 'Tolkien'
        },
        {
          name: 'Stephan King'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
