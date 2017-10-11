const reducer = (state, action) => {
  switch (action.type) {
  case 'GET_PROJECTS':
    return Object.assign({}, state, {
      projects: action.payload
    });
  
  case 'GET_ABOUT':
    return Object.assign({}, state, {
      about: action.payload
    });

  case 'CURRENT_USER':
    return Object.assign({}, state, {
      currentUser: action.payload
    });

  case 'LOGGED_IN':
    return Object.assign({}, state, {
      loggedIn: action.payload
    });

  default: return state;
  }
};

export default reducer;
