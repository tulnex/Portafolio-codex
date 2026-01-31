import React from 'react';

export default function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
    </div>
  );
}
