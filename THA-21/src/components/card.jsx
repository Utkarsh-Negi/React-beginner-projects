import { useState } from 'react';

function NewItem({ update, remove, item, index }) {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <div>
        {edit ? (
          <input
            type="text"
            name="title"
            id="title"
            required
            value={item.title}
            onChange={(e) => update(index, { title: e.target.value })}
          />
        ) : (
          <h5>{item.title}</h5>
        )}
        {edit ? (
          <input
            type="number"
            name="cal"
            id="cal"
            required
            value={item.cal}
            onChange={(e) => update(index, { cal: e.target.value })}
          />
        ) : (
          <p className="='card-text'"> You have consumed {item.cal} calories</p>
        )}
        <div>
          <button onClick={() => remove(index)}>Delete</button>
          <button onClick={() => setEdit(!edit)}>
            {edit ? 'Done' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
