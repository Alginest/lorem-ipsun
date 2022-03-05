import React, { useState } from "react";
import data from "./data";
function App() {
  const [lorem, setLorem] = useState([]);
  const [value, setValue] = useState(0);
  console.log(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setLorem(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form action="" className="lorem-form">
        <label htmlFor="amount">
          Paragraphs:
          <input
            type="number"
            name="amount"
            id="amount"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {lorem.map((lore, index) => {
          return <p key={index}>{lore}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
