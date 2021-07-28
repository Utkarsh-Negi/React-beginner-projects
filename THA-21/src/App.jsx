import { useState } from 'react';
import NewItem from './components/card';
import Add from './components/item';

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
    <div>
      <Add addItem={addItem} />
      {items.length === 0 ? (
        <h3>Start Adding Items</h3>
      ) : (
        items.map((item, index) => (
          <NewItem
            item={item}
            key={index}
            index={index}
            updateItem={update}
            removeItem={remove}
          />
        ))
      )}
    </div>
  );
}

export default App;
