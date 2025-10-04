import React, { useState, useEffect } from 'react';
import './CitySelect.css';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import Extras from './Extras';
import Navigation from './Navigation';
import{Link} from 'react-router-dom'
const cities = [
  { name: 'Алматы', code: 'ALA' },
  { name: 'Ақтау', code: 'SCO' },
  { name: 'Ақтөбе', code: 'AKX' },
  { name: 'Атырау', code: 'GUW' },
  { name: 'Астана', code: 'NQZ' },
  { name: 'Шымкент', code: 'CIT' },
];

const CitySelect = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  
  const [dateTo, setDateTo] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [datafrom, setDatafrom] = useState('');
  const [datato, setDatato] = useState('');
  const [tickets, setTickets] = useState([]);
  const [people, setPeople] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [flightOptions, setFlightOptions] = useState([   
  { id: 1, timeFrom: "04:05", timeTo: "06:55", price: 62325, type: "Выгодный" },
  { id: 2, timeFrom: "10:15", timeTo: "13:05", price: 69808, type: "Гибкий" },
  { id: 3, timeFrom: "14:20", timeTo: "17:00", price: 54843, type: "Выгодный" },
  { id: 4, timeFrom: "19:00", timeTo: "21:45", price: 69808, type: "Гибкий" },
  { id: 5, timeFrom: "23:30", timeTo: "02:15", price: 52964, type: "Выгодный" }
]);
const chooseTicket = (option) => {
  const updatedTicket = {
    fromcity: from,
    tocity: to,
    fromdata: dateTo,
    todata: dateFrom,
    people: people,
    price: option.price + " KZT"
  };

  axios.post('https://68848e23745306380a389d2e.mockapi.io/order/a1/users', updatedTicket)
    .then(res => {
      // alert("Таңдалған билет сақталды:", res.data);
      setTickets(prev => [...prev, res.data]);
      setShowResults(false);
    })
    .catch(err => {
      console.error("Қате болды:", err);
    });
};






  const totalPassengers = adults + children + infants;





//   useEffect(() => {
//   const handleClickOutside = (e) => {
//     if (!e.target.closest('.dropdown') && !e.target.closest('input')) {
//       setIsOpen(false);
//       setIsOpen1(false);
//       setPassengerOpen(false);
//     }
//   };
//   document.addEventListener('click', handleClickOutside);
//   return () => document.removeEventListener('click', handleClickOutside);
// }, []);





  
  useEffect(() => {
    setPeople(totalPassengers);
  }, [totalPassengers]);


  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const filteredCities1 = cities.filter((city) =>
    city.name.toLowerCase().includes(inputValue1.toLowerCase())
  );

  const handleSelectFrom = (city) => {
    setInputValue(city.name);
    setFrom(city.name);
    setIsOpen(false);
  };

  const handleSelectTo = (city) => {
    setInputValue1(city.name);
    setTo(city.name);
    setIsOpen1(false);
  };

  return (
    <div style={{ display: 'flex' }} className="city-select">
      
      <div className="input-group" style={{ display: 'flex' }}>
        <input
          style={{ marginLeft: '30px' }}
          type="search"
          placeholder="Откуда"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
            setIsOpen1(false);
          }}
          onFocus={() => {
            setIsOpen(true);
            setIsOpen1(false);
            setPassengerOpen(false);
          }}
        />
        <button onClick={() => setIsOpen(false)}>×</button>
      </div>

      {isOpen && (
        <div className="dropdown">
          {filteredCities.map((city, idx) => (
            <div key={idx} className="dropdown-item" onClick={() => handleSelectFrom(city)}>
              <span>{city.name}</span>
              <span className="code">{city.code}</span>
            </div>
          ))}
          {filteredCities.length === 0 && (
            <div className="dropdown-item">Қала табылмады</div>
          )}
        </div>
      )}

    
      <div className="input-group" style={{ display: 'flex' }}>
        <input
          style={{ marginLeft: '30px' }}
          type="search"
          placeholder="Куда"
          value={inputValue1}
          onChange={(e) => {
            setInputValue1(e.target.value);
            setIsOpen1(true);
            setIsOpen(false);
          }}
          onFocus={() => {
            setIsOpen1(true);
            setIsOpen(false);
            setPassengerOpen(false);
          }}
        />
        <button onClick={() => setIsOpen1(false)}>×</button>
      </div>

      {isOpen1 && (
        <div className="dropdown1">
          {filteredCities1.map((city, idx) => (
            <div key={idx} className="dropdown-item" onClick={() => handleSelectTo(city)}>
              <span>{city.name}</span>
              <span className="code">{city.code}</span>
            </div>
          ))}
          {filteredCities1.length === 0 && (
            <div className="dropdown-item">Қала табылмады</div>
          )}
        </div>
      )}

    
      <div className="input-group" style={{ display: 'flex' }}>
        <input
          style={{ marginLeft: '30px', color: 'rgb(126, 126, 126)' }}
          type="date"
          value={dateTo}
          onChange={(e) => {
            setDateTo(e.target.value);
            setDatafrom(e.target.value);
          }}
        />
      </div>

      
      <div className="input-group" style={{ display: 'flex' }}>
        <input
          style={{ marginLeft: '30px', color: 'rgb(126, 126, 126)' }}
          type="date"
          value={dateFrom}
          onChange={(e) => {
            setDateFrom(e.target.value);
            setDatato(e.target.value);
          }}
        />
      </div>

      
      <div className="input-group">
        <button className="btn" onClick={() => {
          setPassengerOpen(!passengerOpen);
          setIsOpen(false);
          setIsOpen1(false);
        }}>
          {totalPassengers} пассажир ↆ
        </button>
        {passengerOpen && (
<div className="dropdown passenger-dropdown" style={{ 
            position: 'relative',
            left: '30px',
            top: '10px',
            zIndex: '1',
            border: '1px solid black',
          }}>
            <div className="dropdown-item">
              Взрослые
            <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button> 
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
            <div className="dropdown-item">
              Дети 2-14 лет
              <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
            <div className="dropdown-item">
              Младенцы 0-2 года
              <button onClick={() => setInfants(Math.max(0, infants - 1))}>-</button>
              <span>{infants}</span>
              <button onClick={() => setInfants(infants + 1)}>+</button>
            </div>
          </div>
        )}
      </div>

      
      <div className="input-group">
        <button onClick={chooseTicket}className="search-btn">
          <Link to='./Regiter1'> <CiSearch /></Link>
         
        </button>
      </div>
{/* {showResults && (
  <div className="modal-overlay" onClick={() => setShowResults(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>{from} → {to}</h2>
      <p>{dateTo} — {dateFrom}</p>

      {flightOptions.map(option => (
        <div 
          key={option.id} 
          className="flight-card"
          onClick={() => chooseTicket(option)}
          style={{cursor:'pointer'}}
        >
          <div><b>{option.timeFrom}</b> {from} → <b>{option.timeTo}</b> {to}</div>
          <div>{option.price.toLocaleString()} KZT — 
            <span style={{color: option.type === "Выгодный" ? 'green' : 'red'}}>
              {option.type}
            </span>
          </div>
        </div>
      ))}

      <button onClick={() => setShowResults(false)}>Жабу</button>
    </div>
  </div>
)} */}

    </div>
  );
};

export default CitySelect;
