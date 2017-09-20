const reducer = (state, action) => {
  switch (action.type) {
  case 'GET_PROJECTS':
    return Object.assign({}, state, {
      projects: action.payload
    });
  
  default: return state;
  }
};

export default reducer;
