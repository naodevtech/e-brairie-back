'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: uuidv4(),
          name: 'John Doe',
          role: 'admin',
          email: 'JohnDoe@gmail.fr',
          password: 'password'
        },
        {
          id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
          name: 'Jackson',
          role: 'basic',
          email: 'Jackson@gmail.fr',
          password: 'password'
        },
        {
          id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
          name: 'Lisa',
          role: 'basic',
          email: 'Lisa@gmail.fr',
          password: 'password'
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
