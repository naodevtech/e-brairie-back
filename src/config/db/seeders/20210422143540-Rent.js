'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Rents',
      [
        {
          in: '2021-04-22 15:27:13',
          back: '2021-05-22 15:27:13',
          bookId: 5,
          //Jackson
          userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        },
        {
          in: '2021-04-27 15:27:13',
          back: '2021-05-27 15:27:13',
          bookId: 2,
          //Lisa
          userId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e'
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
