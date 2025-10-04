// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './App.css'
// function App() {
//   const [page, setPage] = useState("first");
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");
//   const [baga, setBaga] = useState("");
//   const [names, setNames] = useState([]);

//   useEffect(() => {
//     if (page === "three") {
//       axios
//         .get("https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders")
//         .then((res) => setNames(res.data));
//     }
//   }, [page]);

//   function send() {
//     axios
//       .post("https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders", {
//         name,
//         text,
//         baga,
//       })
//       .then(() => {
//         setName("");
//         setText("");
//         setBaga("");
//         alert('Пікір қосылды ')
//       });
//   }

//   return (
//     <div>
//       {page === "first" && (
//         <div>
//         <div className="home">
//           <h1>Student Feedback App</h1>
//           <button onClick={() => setPage("second")}>Пікір қалдыру</button>
//           <button onClick={() => setPage("three")}>Пікірлерді көру</button>
//         </div>
//         </div>
//       )}

//       {page === "second" && (
//         <div>
//         <div className="plus">
//           <button onClick={() => setPage("first")}>Артқа</button>
//           <form >
//             <input type="text" placeholder="Атыңыз" value={name} onChange={(e) => setName(e.target.value)} required/>
//             <br />
//             <textarea placeholder="Пікіріңіз..." value={text} onChange={(e) => setText(e.target.value)} required></textarea>
//             <br />
//             <label>Баға:</label><br />
//             <select value={baga} onChange={(e) => setBaga(e.target.value)} required>
//               <option value="5">5 - Керемет</option>
//               <option value="4">4 - Жақсы</option>
//               <option value="3">3 - Орташа</option>
//               <option value="2">2 - Нашар</option>
//               <option value="1">1 - Төмен</option>
//             </select>
//             <br />
//             <button onClick={send}>Жіберу</button>
//           </form>
//         </div>
//         </div>
//       )}

//       {page === "three" && (
//         <div className="text2">
       
//           <button  onClick={() => setPage("first")}>Артқа</button>
//           <h2>Пікірлер</h2>
//           {names.length === 0 ? (
//             <p>Пікірлер жоқ</p>
//           ) : (
//             names.map((item) => (
//                 <div className="text1">
//               <div className="text" key={item.id}>
//                 <h3>{item.name}</h3>
//                 <p>{item.text}</p>
//                 <span>Баға:</span> <br />
//                 <p>{item.baga}</p>
//               </div>
//               </div>
//             ))
//           )}
    
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Kosy from "./Kosy";
import Tizim from "./Tizim";
import './App.css';

function App() {
  const [page, setPage] = useState("first");

  return (
    <div>
      {page === "first" ? (
        <div className="home">
          <h1>Student Feedback App</h1>
          <button onClick={() => setPage("second")}>Пікір қалдыру</button>
          <button onClick={() => setPage("three")}>Пікірлерді көру</button>
        </div>
      ) : page === "second" ? (
        <Kosy setPage={setPage} />
      ) : (
        <Tizim setPage={setPage} />
      )}
    </div>
  );
}

export default App;
