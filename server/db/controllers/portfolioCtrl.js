const portfolios = require('../models/portfolio.js');
const db = require('../index.js');

module.exports = {
  addProject: (req, res) => {
    let projectInfo = req.body; // picture, info, and title
    db.select('id').from('users').where({username: req.session.username}).then(userData => {
      projectInfo.user_id = userData[0].id;
      db('portfolios').insert(projectInfo).then(data => {
        res.sendStatus(201);
      });
    });
  },

  getProjects: (req, res) => {
    let username = req.body.user;
    db.select('id'). from('users').where({username: username}).then(userData => {
      db.select().from('portfolios').where({user_id: userData[0].id}).then(projects => {
        res.json(projects);
      });
    });
  }
};



