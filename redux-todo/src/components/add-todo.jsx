import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';
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
            addItem({
              title: item,
              done: false,
            })
          );
          setItem('');
        }}
      >
        ADD
      </button>
      <button>Load</button>
    </div>
  );
}
export default Addtodo;
