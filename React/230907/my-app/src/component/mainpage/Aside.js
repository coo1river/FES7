import { useState } from "react";

export default function Aside() {
  const [Numbers, setNumbers] = useState([1]);

  return (
    <div>
      <button
        onClick={(e) => {
          const copy = [...Numbers];
          copy.push(Numbers.length + 1);
          setNumbers(copy);
        }}
      ></button>
      {Numbers.map((x) => (
        <p>{x}</p>
      ))}
    </div>
  );
}
