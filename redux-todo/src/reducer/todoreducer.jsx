const todoreducer = (state = '', action) => {
  if (action.type === 'ADD_Item') {
    return [...state, action.payload];
  } else if (action.type === 'DEL_Item') {
    return state.filter((item, index) => index !== action.payload);
  }
  return state;
};

export default todoreducer;
