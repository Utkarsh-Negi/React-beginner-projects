import { useState } from 'react';

function Add({ addItem }) {
  const [title, setTitle] = useState('');
  const [cal, setCal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, cal });
    setTitle('');
    setCal('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="outer">
        <div>
          {/* <label className="head">Title</label> */}
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Item name"
          />
        </div>
        <div>
          {/* <label className="head">Calorie</label> */}
          <input
            type="number"
            name="number"
            id="number"
            required
            value={cal}
            onChange={(e) => setCal(e.target.value)}
            placeholder="Calorie amount"
          />
        </div>
      </div>
      <button type="submit" id="butt">
        Add Item
      </button>
    </form>
  );
}

export default Add;
