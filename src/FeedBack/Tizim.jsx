import React, { useState, useEffect } from "react";
import axios from "axios";

function Tizim({ setPage }) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
      .get("https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders")
      .then((res) => setNames(res.data));
  }, []);

  return (
    <div className="text2">
      <button onClick={() => setPage("first")}>Артқа</button>
      <h2>Пікірлер</h2>
      {names.length === 0 ? (
        <p>Пікірлер жоқ</p>
      ) : (
        names.map((item) => (
          <div className="text1" key={item.id}>
            <div className="text">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <span>Баға:</span> <br />
              <p>{item.baga}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Tizim;
