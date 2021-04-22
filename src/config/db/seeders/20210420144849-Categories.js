'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Poche'
        },
        {
          name: 'Manga'
        },
        {
          name: 'Bd'
        },
        {
          name: 'Roman'
        },
        {
          name: 'Scientifiques'
        },
        {
          name: 'Developpement Personnel'
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
