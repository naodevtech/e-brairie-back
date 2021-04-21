'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'CategoryGenres',
      [
        {
          id: 1,
          //Manga
          categoryId: 3,
          //action
          genreId: 1
        },
        {
          id: 2,
          //Manga
          categoryId: 3,
          //fantastique
          genreId: 2
        },
        {
          id: 3,
          //Manga
          categoryId: 3,
          //aventure
          genreId: 3
        },
        {
          id: 4,
          //BD
          categoryId: 3,
          //action
          genreId: 1
        },
        {
          id: 5,
          //BD
          categoryId: 3,
          //fantastique
          genreId: 2
        },
        {
          id: 6,
          //BD
          categoryId: 3,
          //aventure
          genreId: 3
        },
        {
          id: 7,
          //Roman
          categoryId: 4,
          //action
          genreId: 1
        },
        {
          id: 8,
          //Roman
          categoryId: 4,
          //fantastique
          genreId: 2
        },
        {
          id: 9,
          //Roman
          categoryId: 4,
          //aventure
          genreId: 3
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
