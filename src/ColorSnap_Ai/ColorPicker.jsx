import React, { useState, useEffect } from "react";
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function ColorGame() {
  // const { theme } = useContext(ThemeContext);
     const[level, setLevel]= useState('easy')
 const baseColors =
  level === "easy"
    ? ["#036573","#065817","#0c6549","#12f46f","#14c6c1","#1f726a","#25380e","#283145",
        // "#db6b2c","#e01f4a","#e3c8ff","#ea9b5e","#ef2fd6","#f2f9c4","#f57a9a","#fae33b","#fc6c1a"
    ]
    : level === "normal"
    ? ["#036573","#065817","#0c6549","#12f46f","#14c6c1","#1f726a","#25380e","#283145",
    //    "#30fced","#356866","#3b2f8f","#3f7a2e","#45a1ff","#4b6b2a","#4f3b2c","#57b0a1",
     "#b2f05e","#b57c90",
    // "#bd3a00","#c0d9ff","#c47b1f","#cb9ee4","#d03e6a","#d5f2a1",
    //  "#9c2a5d","#a1e3d9","#a66f12","#ab5fb8",    
       "#db6b2c","#e01f4a","#ea9b5e","#ef2fd6","#f2f9c4","#f57a9a","#fae33b","#fc6c1a"
    ]
    : level === "hard"
    ? [
        // "#036573","#065817","#0c6549","#12f46f","#14c6c1","#1f726a","#25380e","#283145",
       "#30fced","#356866","#3b2f8f","#3f7a2e","#45a1ff","#4b6b2a","#4f3b2c","#57b0a1",
    //    "#5a1c6f","#5f8c3d","#62d9a8","#6a2b1f","#6f5ee7","#73c2ff","#78a36b","#7d1f2a",
       "#83f3b9","#8a4d2e","#8f9cff","#94b86a","#9c2a5d","#a1e3d9","#a66f12","#ab5fb8",
       "#b2f05e","#b57c90","#bd3a00","#c0d9ff","#c47b1f","#cb9ee4","#d03e6a","#d5f2a1",
    //    "#db6b2c","#e01f4a","#e3c8ff","#ea9b5e","#ef2fd6","#f2f9c4","#f57a9a","#fae33b","#fc6c1a"
    ]
    : [];

     
// "#ff9dd2","#ffd1a5","#ffe6f2","#001f3f","#112b21","#1b3a52","#244f1a",
//   "#2d7cfa","#36724b","#4169a1","#4a2b0c","#52788e","#5b3f6f","#64512a","#6d9cff"

  ;

  // Әр түсті 2 рет алып, shuffle жасаймыз 
  const [colors, setColors] = useState([]);
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {

    const doubled = [...baseColors, ...baseColors];
    setColors(shuffle(doubled));
  }, [level]);

  const handleClick = (index) => {
    if (opened.length === 2 || opened.includes(index) || matched.includes(index)) return;

    const newOpened = [...opened, index];
    setOpened(newOpened);

    if (newOpened.length === 2) {
      const [first, second] = newOpened;
      if (colors[first] === colors[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setOpened([]), 800);
    }
  };
  function easy(){
    setLevel('easy')
    setOpened([]); 
    setMatched([]);  
  }
  function normal(){
    setLevel('normal')
    setOpened([]);  
    setMatched([]);  
  }
  function hard(){
    setLevel('hard')
    setOpened([]);  
    setMatched([]);  
  }

  return (
    <div 
    // className={` color-game ${theme}`}
    className="color-game" 
    style={{
        width:'100%'
    }}>

      <h2>🟩 Color Memory Game</h2>
      <div className="radio-input">
  <label className="label">
    <input
      type="radio"
      name="value-radio"
      value="easy"
      onChange={easy}
      checked={level === "easy"}
    />
    <span className="text">easy</span>
  </label>

  <label className="label">
    <input
      type="radio"
      name="value-radio"
      value="normal"
      onChange={normal}
      checked={level === "normal"}
    />
    <span className="text">normal</span>
  </label>

  <label className="label">
    <input
      type="radio"
      name="value-radio"
      value="hard"
      onChange={hard}
      checked={level === "hard"}
    />
    <span className="text">hard</span>
  </label>
</div>
      {/* <div className="buttons">
        <button className="level" onClick={easy}>easy</button>
        <button className="level" onClick={normal}>normal</button>
        <button className="level" onClick={hard}>hard</button>
      </div> */}
      <div className="grid1" style={{
        display:'grid',
        gridTemplateColumns:level=='easy'?'repeat( 4, 92px)':level=='normal'?'repeat(6 , 92px)':level=='hard'?'repeat(8, 92px)':'',
      }}>
        {colors.map((color, i) => {
          const isOpen = opened.includes(i) || matched.includes(i);
          return (
            <div
              key={i}
              className="card"
              onClick={() => handleClick(i)}
              style={{
                background: isOpen ? color : "#ccc",
                cursor: "pointer"
              }}
            ></div>
          );
        })}
      </div>
      {matched.length === colors.length && <h3>🎉 Жеңдің!</h3>}
    </div>
  );
}

export default ColorGame;
