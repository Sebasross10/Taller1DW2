import React from 'react';
import './Counter.css'
import { useCount } from './CountContext.jsx';

const Counter = () => {
  const { count, increment, decrement, reset } = useCount();

  return (
    <div className="counter">
      <p>Contador en todas las tarjetas: {count}</p>
      <button onClick={increment}>Aumentar</button>
      <button onClick={decrement}>Disminuir</button>
      <button onClick={reset}>Restaurar</button>
    </div>
  );
};

export default Counter;
