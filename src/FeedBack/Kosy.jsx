import React, { useState } from "react";
import axios from "axios";

function Kosy({ setPage }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [baga, setBaga] = useState("");

  function send(e) {
    e.preventDefault();
    axios.post("https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders", {
      name,
      text,
      baga,
    }).then(() => {
      setName("");
      setText("");
      setBaga("");
      alert('Пікір қосылды');
    });
  }

  return (
    <div className="plus">
      <button onClick={() => setPage("first")}>Артқа</button>
      <form onSubmit={send}>
        <input 
          type="text" 
          placeholder="Атыңыз" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <br />
        <textarea 
          placeholder="Пікіріңіз..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          required
        ></textarea>
        <br />
        <label>Баға:</label><br />
        <select value={baga} onChange={(e) => setBaga(e.target.value)} required>
          <option value="5">5 - Керемет</option>
          <option value="4">4 - Жақсы</option>
          <option value="3">3 - Орташа</option>
          <option value="2">2 - Нашар</option>
          <option value="1">1 - Төмен</option>
        </select>
        <br />
        <button type="submit">Жіберу</button>
      </form>
    </div>
  );
}

export default Kosy;
