const routes = require('express').Router();
const userCtrl = require('../db/controllers/userCtrl.js');
const portfolioCtrl = require('../db/controllers/portfolioCtrl.js');

routes.post('/signin', userCtrl.signin);
routes.post('/signup', userCtrl.signup);
routes.post('/addProject', portfolioCtrl.addProject);

module.exports = routes;

