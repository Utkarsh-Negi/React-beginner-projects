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

export { addItem, deleteItem };
