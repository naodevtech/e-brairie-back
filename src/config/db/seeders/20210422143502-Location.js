'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          categoryId: 1,
          shelf: 'A',
          place: 1,
          floor: 1
        },
        {
          categoryId: 1,
          shelf: 'A',
          place: 2,
          floor: 1
        },
        {
          categoryId: 1,
          shelf: 'A',
          place: 3,
          floor: 1
        },
        {
          categoryId: 1,
          shelf: 'A',
          place: 4,
          floor: 1
        },
        {
          categoryId: 2,
          shelf: 'A',
          place: 1,
          floor: 1
        },
        {
          categoryId: 2,
          shelf: 'A',
          place: 2,
          floor: 1
        },
        {
          categoryId: 2,
          shelf: 'A',
          place: 3,
          floor: 1
        },
        {
          categoryId: 2,
          shelf: 'A',
          place: 4,
          floor: 1
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
