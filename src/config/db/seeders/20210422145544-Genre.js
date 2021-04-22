'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Genres',
      [
        {
          id: 1,
          name: 'action'
        },
        {
          id: 2,
          name: 'fantastique'
        },
        {
          id: 3,
          name: 'aventure'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
