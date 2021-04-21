'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Poche'
        },
        {
          id: 2,
          name: 'Manga'
        },
        {
          id: 3,
          name: 'Bd'
        },
        {
          id: 4,
          name: 'Roman'
        },
        {
          id: 5,
          name: 'Scientifiques'
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
