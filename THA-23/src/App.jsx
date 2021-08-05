import React from 'react';
// import State from './hook';
import { useArray } from './usearray';
function App() {
  const todos = useArray([]);

  return (
    <div>
      <h3>Todos</h3>
      <button onClick={() => todos.add(Math.random())}>Add</button>
      <ul>
        {todos.value.map((todo, i) => (
          <li key={i}>
            {todo}
            {/* <button onClick={() => todos.removeByIndex(i)}>Delete </button> */}
          </li>
        ))}
      </ul>
      <button onClick={() => todos.clear()}>Clear</button>
    </div>
  );
}
export default App;
