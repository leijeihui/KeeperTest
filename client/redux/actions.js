let actions = {
  getProjects: (projects) => {
    return {
      type: 'GET_PROJECTS',
      payload: projects
    };
  },

  getAbout: (about) => {
    return {
      type: 'GET_ABOUT',
      payload: about
    };
  },

  currentUser: (user) => {
    return {
      type: 'CURRENT_USER',
      payload: user,
    };
  },

  loggedIn: (bool) => {
    return {
      type: 'LOGGED_IN',
      payload: bool,
    };
  }
};

export default actions;