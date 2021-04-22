'use strict';

const { v4: uuidv4 } = require('uuid');

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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
