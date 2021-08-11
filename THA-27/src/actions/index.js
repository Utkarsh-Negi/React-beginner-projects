const addItem = (item) => {
  return {
    type: 'ADD_Item',
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: 'DEL_Item',
    payload: id,
  };
};

const loadTodo = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => {
        return dispatch({
          type: 'LOAD_TODO',
          payload: todos,
        });
      });
  };
};

export { addItem, deleteItem, loadTodo };
