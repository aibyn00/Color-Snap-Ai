import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Tizim.css";
import { Link, useFetcher } from "react-router-dom";


const flightOptions = [
  { id: 1, timeFrom: "04:05", timeTo: "06:55", price: 62325, type: "Выгодный" },
  { id: 2, timeFrom: "10:15", timeTo: "13:05", price: 69808, type: "Гибкий" },
  { id: 3, timeFrom: "14:20", timeTo: "17:00", price: 54843, type: "Выгодный" },
  { id: 4, timeFrom: "19:00", timeTo: "21:45", price: 69808, type: "Гибкий" },
  { id: 5, timeFrom: "23:30", timeTo: "02:15", price: 52964, type: "Выгодный" },
];

function Tizim() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  const userData = location.state || {};

  const chooseTicket = async (option) => {
    try {
      
      const res = await axios.get(
        "https://68848e23745306380a389d2e.mockapi.io/order/a1/users"
      );

      const data = res.data;
      // if (data.length === 0) {
      //   alert("API бос ");
      //   return;
      // }
      const lastItem = data[data.length - 1];
      const updated = await axios.put(
        `https://68848e23745306380a389d2e.mockapi.io/order/a1/users/${lastItem.id}`,
        {
          ...lastItem,
          price: option.price + " ₸", 
        }
      );

      setSelected(option.id);
      // alert("");

      console.log("Өзгертілген элемент:", updated.data);
    } catch (err) {
      console.error("Қате:", err);
    }
  };

  return (
    <div className="tizim-container">
        <button><Link to='/'>back</Link> </button>
      <h2>Билеттер тізімі</h2>
      {flightOptions.map((option) => (
        <div
          key={option.id}
          className={`ticket-card ${selected === option.id ? "active" : ""}`}
          onClick={() => chooseTicket(option)}
        >
          <div className="time">
            <b>{option.timeFrom}</b> → <b>{option.timeTo}</b>
          </div>
          <div className="price">{option.price.toLocaleString()} ₸</div>
          <div
            className={`type ${
              option.type === "Выгодный" ? "cheap" : "flexible"
            }`}
          >
            {option.type}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tizim;
