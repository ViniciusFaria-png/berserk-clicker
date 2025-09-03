import { useState } from "react";

interface CounterProps {
  initialValue?: number; //initial value
  step: number; //increment value
}
export default function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Behelits: {count}</p>
      <button onClick={() => setCount(count + step)}>Behelit</button>
    </div>
  );
}
