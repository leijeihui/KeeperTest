const knex = require('../index.js');

module.exports = knex.schema.createTableIfNotExists('portfolios', (portfolio) => {
  portfolio.increments();
  portfolio.string('pic');
  portfolio.string('info', 5000);
  portfolio.string('title');
  portfolio.integer('user_id');
}).then(() => {
  console.log('portfolios table created');
});