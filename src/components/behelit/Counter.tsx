import { useState } from "react";
import BehelitButton from "./BehelitButton";
//Implementar deteccao por pixel Canvas

interface CounterProps {
  initialValue?: number; //initial value
  step: number; //increment value
}
export default function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>Behelits: {count}</p>
      <BehelitButton onClick={() => setCount(count + step)}></BehelitButton>
    </div>
  );
}
