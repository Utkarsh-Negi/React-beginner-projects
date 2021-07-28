import { useState } from 'react';
import NewItem from './components/card';
import Add from './components/item';
import './style.css';

function App() {
  const [items, setItems] = useState([]);

  const update = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const remove = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Caltrack</h1>
      <Add addItem={addItem} />
      {items.length === 0 ? (
        <h2>Start Adding Items</h2>
      ) : (
        items.map((item, index) => (
          <NewItem
            item={item}
            key={index}
            index={index}
            update={update}
            remove={remove}
          />
        ))
      )}
    </div>
  );
}

export default App;
