import React, { useState } from 'react';

function Button() {
  const [counter, setCounter] = useState(0);

  return (
    <span id="butt" onClick={() => setCounter(counter + 1)}>
      {' '}
      {counter}{' '}
    </span>
  );
}

export default Button;
