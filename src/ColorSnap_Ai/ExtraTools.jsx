// import React, { useState,createContext } from "react";
// import ThemeContext from "./ThemeContext";
// function ExtraTools({ setSelectedColor }) {
//   const [customColor, setCustomColor] = useState("");


//   const handleClear = () => {
//     setSelectedColor(null);
//   };

//   const handleRandom = () => {
//     const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     setSelectedColor({
//       id: Date.now(),
//       name: "Random",
//       shades: [randomHex],
//     });
//   };

//   const handleShowAll = () => {
//     setSelectedColor({
//       id: 999,
//       name: "All Colors",
//       shades: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
//     });
//   };

//   const handleAddColor = () => {
//     if (customColor.startsWith("#") && (customColor.length === 7)) {
//       setSelectedColor({
//         id: Date.now(),
//         name: "Custom",
//         shades: [customColor],
//       });
//       setCustomColor("");
//     } else {
//       alert("Hex кодты дұрыс енгіз (мысалы: #123ABC)");
//     }
//   };

//   return (
//     <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
//       <h3>Қосымша құралдар</h3>
//       <button onClick={handleClear} style={{ margin: "5px" }}>🧹 Тазарту</button>
//       <button onClick={handleRandom} style={{ margin: "5px" }}>🎲 Кездейсоқ түс</button>
//       <button onClick={handleShowAll} style={{ margin: "5px" }}>🌈 Барлық түстер</button>

      
//     </div>
//   );
// }

// export default ExtraTools;
