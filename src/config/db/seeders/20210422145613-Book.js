'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Les Misérables',
          amount: 5,
          categoryId: 4,
          authorId: 2,
          locationId: 1,
          description: 'Lorem'
        },
        {
          title: 'Harry Potter',
          amount: 0,
          categoryId: 4,
          authorId: 1,
          locationId: 2,
          description: 'Lorem'
        },
        {
          title: 'Réflechissez et devenez Riche',
          amount: 5,
          categoryId: 6,
          authorId: 3,
          locationId: 3,
          description: 'Lorem'
        },
        {
          title: 'Le seigner des anneaux',
          amount: 3,
          categoryId: 4,
          authorId: 4,
          locationId: 4,
          description: 'Lorem'
        },
        {
          title: 'Shinning',
          amount: 3,
          categoryId: 4,
          authorId: 5,
          locationId: 5,
          description: 'Lorem'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
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
