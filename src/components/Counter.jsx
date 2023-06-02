import { useState, useEffect } from 'react';

export function Counter() {
  const [text, setText] = useState(
    "It ain't raining! Guess the count is stuck at:"
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Runs if the component hydrates
    setText("Rainy day counter:")
  }, []);
  return (
    <>
      <p>{text} {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}