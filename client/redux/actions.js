let actions = {
  getProjects: (projects) => {
    return {
      type: 'GET_PROJECTS',
      payload: projects
    };
  }
};

export default actions;