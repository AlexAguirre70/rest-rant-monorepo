'use strict';
require('dotenv').config()
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[{
      first_name: 'Alex',
      last_name: 'Admin',
      email: 'team.a.guirre@gmail.com',
      role:'admin',
      password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD,12),
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      email:'team.a.guirre@gmail.com'
    })
  }
};
// seed terminal command     sequelize db:seed --seed my_seeder_file.js