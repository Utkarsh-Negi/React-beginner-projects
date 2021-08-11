const additem = (item) => {
  return {
    type: 'ADD_Item',
    payload: item,
  };
};

const deleteitem = (id) => {
  return {
    type: 'DEL_Item',
    payload: id,
  };
};

export { additem, deleteitem };
