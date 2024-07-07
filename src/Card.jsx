import { useState } from "react";
import Counter from "./components/Counter";
import CounterButtons from "./components/CounterButtons";
import Heading from "./components/Heading";
import Reset from "./components/Reset";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Heading />
      <Counter count={count} />
      <Reset setCount={setCount} />
      <CounterButtons setCount={setCount} count={count} />
    </div>
  );
}
