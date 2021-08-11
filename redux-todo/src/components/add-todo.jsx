import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../actions';
function Addtodo() {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="new todo.."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            additem({
              title: item,
              done: false,
            })
          );
          setItem('');
        }}
      >
        ADD
      </button>
    </div>
  );
}
export default Addtodo;
