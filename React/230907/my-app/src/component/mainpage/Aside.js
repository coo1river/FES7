import { useState } from "react";

export default function Aside() {
  const [Numbers, setNumbers] = useState([1]);
  const handleCrateNumber = () => {
    const copy = [...Numbers];
    copy.push(Numbers.length + 1);
    setNumbers(copy);
  };

  return (
    <div>
      <button onClick={handleCrateNumber}></button>
      {Numbers.map((x) => (
        <p>{x}</p>
      ))}
    </div>
  );
}
