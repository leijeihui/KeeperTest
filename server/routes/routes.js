const routes = require('express').Router();
const userCtrl = require('../db/controllers/userCtrl.js');

routes.post('/signin', userCtrl.signin);
routes.post('/signup', userCtrl.signup);

module.exports = routes;

