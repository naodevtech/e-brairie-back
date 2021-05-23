'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Poche',
          emoji: '👖'
        },
        {
          name: 'Manga',
          emoji: '⛩'
        },
        {
          name: 'Bd',
          emoji: '🗯'
        },
        {
          name: 'Roman',
          emoji: '📕'
        },
        {
          name: 'Scientifiques',
          emoji: '🔬'
        },
        {
          name: 'Developpement Personnel',
          emoji: '💆🏽‍♂️'
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
