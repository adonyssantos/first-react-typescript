import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = (amount: number = 1): void => {
    setCounter(counter + amount);
  };

  return (
    <div className="mt-5">
      <h2>Counter: useState</h2>
      <span>Counter: {counter}</span>
      <br />
      <button
        onClick={() => increase()}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => increase(2)}
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};
