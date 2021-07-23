import { useState } from 'react';
import Chart from './components/chart';
import './style.css';

function App() {
  const [data, setData] = useState([
    {
      food: 'Pizza 🍕',
      cal: 56,
    },
    {
      food: 'Burger 🍔',
      cal: 49,
    },
    {
      food: 'Noodles 🍝',
      cal: 30,
    },
    {
      food: 'Coke 🥤',
      cal: 79,
    },
    {
      food: 'Rice 🍚',
      cal: 39,
    },
    {
      food: 'Bread 🍞',
      cal: 15,
    },
    {
      food: 'Cheese 🧀',
      cal: 50,
    },
    {
      food: 'Cookie 🍘',
      cal: 80,
    },
  ]);

  return (
    <div className="outer">
      <h1>Calroie Catalog</h1>
      <div className="container">
        {data.map((item, i) => (
          <Chart
            food={item.food}
            cal={item.cal}
            data={data}
            setData={setData}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
