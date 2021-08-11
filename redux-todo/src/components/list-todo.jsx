import { useSelector } from 'react-redux';

const List = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <h3 style={{ display: 'inline-block' }}>{todos.title}</h3>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default List;
