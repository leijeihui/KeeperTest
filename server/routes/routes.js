const routes = require('express').Router();
const userCtrl = require('../db/controllers/userCtrl.js');
const portfolioCtrl = require('../db/controllers/portfolioCtrl.js');
const s3Ctrl = require('../db/controllers/s3Ctrl.js');


routes.post('/signin', userCtrl.signin);
routes.post('/signup', userCtrl.signup);
routes.post('/addProject', portfolioCtrl.addProject);
routes.post('/s3', s3Ctrl);
routes.get('/getProjects', portfolioCtrl.getProjects);
routes.get('/:username/about', userCtrl.about);

module.exports = routes;

