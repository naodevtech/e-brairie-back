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
//Category
// Poche id 1
// Manga  id 2
// Bd id 3
// Roman  id 4
// Scientifique id 5
// Developpement Personnel id 6
//Author
// 'J.K Rowlling' id 1
// 'Victor Hugo' id 2
// 'Napoleon Hill' id 3
// 'Tolkien' id 4
// 'Stephan King' id 5
