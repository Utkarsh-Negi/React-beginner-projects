import './App.css';
import Addtodo from './components/add-todo';
import List from './components/list-todo';

function App() {
  return (
    <div className="App">
      <h1>Todo-List</h1>
      <Addtodo />
      <List />
    </div>
  );
}

export default App;
