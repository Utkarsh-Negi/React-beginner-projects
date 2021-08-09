// returns the type of actions takes place in the UI

const email = (value) => {
  return {
    type: 'email',
    payload: value,
  };
};

const username = (value) => {
  return {
    type: 'name',
    payload: value,
  };
};

export { email, username };
