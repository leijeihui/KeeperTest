const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sessions = require('express-session')({
  key: 'session',
  secret: 'SUPER SECRET SECRET',
  store: new MySQLStore({
    host: process.env.HOST || 'localhost',
    user: process.env.USERNAME || 'root', 
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'blogger'  
  })
});

module.exports = sessions;