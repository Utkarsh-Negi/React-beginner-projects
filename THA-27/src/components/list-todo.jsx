import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../actions';

const List = () => {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h3 style={{ display: 'inline-block' }}>{todo.title}</h3>
          <button
            onClick={() => {
              dispatch(deleteItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default List;
