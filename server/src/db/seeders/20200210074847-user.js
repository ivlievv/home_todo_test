'use strict';

const bcrypt = require('bcrypt');

function generateUsers() {
  const users = [];
      for ( let i = 0; i < 100; ){
        users.push( new Object( {
          firstName: 'Java',
          lastName: 'Script',
          login: `test_login${++i}`,
          email:`java${++i}@gmail.com`,
          passwordHash: bcrypt.hashSync(`password${i}`, bcrypt.genSaltSync(10)),
          createdAt: new Date(),
          updatedAt: new Date()
        }))
  }
      return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});
  }
};
