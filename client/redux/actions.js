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
  }
};

export default actions;