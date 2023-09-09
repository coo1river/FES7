import { useState } from "react";

export default function Aside() {
  const [Numbers, setNumbers] = useState([1]);

  return (
    <div>
      <button
        onClick={(e) => {
          const copy = [...Numbers];
          copy.push(2);
          setNumbers(copy);
        }}
      ></button>
      {Number.map((x, i) => (
        <p>{x[i]}</p>
      ))}
    </div>
  );
}
