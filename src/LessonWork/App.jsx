import './App.css';
import { useState } from "react";

function App() {
  const [state, setState] = useState(2);
  const [name, setName] = useState('');
  const [color, setColor] = useState('white');

  function count() {
    setState(state * state);
  }

  function count1() {
    setState(Math.sqrt(state));
  }

  function count2() {
    setState(state - 1);
  }

  function count3() {
    setState(state + 1);
  }

  function reset() {
    setState(0);
  }

  



  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  function changeColor() {
    setColor(getRandomColor());
  }







  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: color,
        padding: '20px'
      }}
    >
      <div className='div1'>
        <input type="text" onChange={(e)=>{
                 setName(e.target.value)
                
             }} />
        <h2>{name}</h2>

        <button onClick={count2}>Азайту</button>
        <button onClick={count3}>Қосу</button>
        <button onClick={count}>Квадраттау</button>
        <button onClick={count1}>Түбір асты</button>
        <button onClick={reset}>Жою</button>

        <h1>{state}</h1>




        <button onClick={changeColor}>Түсті өзгерту</button>





      </div>
    </div>
  );
}

export default App;