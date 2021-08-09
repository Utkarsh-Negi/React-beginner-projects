const initialstate = {
  username: '',
  email: '',
};

const Reducer = (state = initialstate, action) => {
  if (action.type === 'email') {
    console.log('email');
    return { ...state, email: action.payload };
  } else if (action.type === 'name') {
    console.log('name');
    return { ...state, username: action.payload };
  }

  return state;
};

export default Reducer;
