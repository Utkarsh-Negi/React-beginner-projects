import { useState } from 'react';

function State(props) {
  const { name } = props;
  const [state, setState] = useState(name);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState('Ankit')}>Click</button>
    </div>
  );
}
export default State;
