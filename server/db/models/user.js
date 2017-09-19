const knex = require('../index.js');

module.exports = knex.schema.createTableIfNotExists('users', (user) => {
  user.increments();
  user.string('username');
  user.string('password');
  user.string('firstname');
  user.string('lastname');
  user.string('email');
}).then(() => {
  console.log('users table created');
});