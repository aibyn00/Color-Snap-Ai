import { useState } from "react";
import './aralyk.css'

function App() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const[isTex, setisTex] = useState(true)
const [isLog,setisLog] = useState( false)
const[isReg, setisReg] =useState(false)
const[isDel, setisDel] =useState(false)
const[isFel, setisFel] =useState(false)


function log(){
    setisLog(true)
    setisDel(false)
    setisReg(false)
    setisTex(false)
    setisFel(false)
   
}function reg(){
   

    setisLog(false)
    setisDel(false)
    setisReg(true)
    setisTex(false)
    setisFel(false)
    const user1 = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(user1));
}

function tre(){
    alert("сіз тіркелдіңіз")
}
function gue(){
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.getElementById("name").textContent = user.name;
        document.getElementById("email").textContent = user.email;
    }

    setisLog(false)
    setisDel(true)
    setisReg(false)
    setisTex(false)
    setisFel(false)
}

function out(){
    setisLog(false)
    setisDel(false)
    setisReg(false)
    setisTex(true)
    setisFel(false)
    
}
function fel(){
    setisFel(true)
    setisLog(false)
    setisDel(false)
    setisReg(false)
    setisTex(false)
}






return<div>

    <div className="login" style={{
        display:isTex?"block":"none"
    }}>
        <button onClick={log}>Login</button>
        <button className="ry" onClick={fel} >Login as Guest</button>
    </div>
    <div className="login" style={{
        display:isFel?"block":"none"
    }}> 
        <h1>Welcome , Guest!</h1>
        <button onClick={out}>Logout</button>
    </div>

    <div className="login"
    style={{
        display:isLog?"block":"none"
    }}>
        <h1>Login</h1>
    <input type="email" />
    <input type="password" />
    <button onClick={tre}>Login</button>
    <button onClick={reg}>Register</button>
    </div>
    <div className="login"
    style={{
        display:isReg?"block":"none"
    }}>
    <h1>Register</h1>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <input type="email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" onChange={(e) => setPassword(e.target.value)} />

    
    <button onClick={gue}>Register</button>
    </div>

    <div className="login"
     style={{
        display:isDel?"block":"none"
    }}>
    <h1>Welcome, <span id="name"></span></h1>
    <p>Email: <span id="email"></span></p>

    <button className="rt">Rermove</button>
    <button className="rt" onClick={out}>Logout</button>
    </div>


    </div>
}
export default App