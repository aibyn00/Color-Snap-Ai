import React, { useState }from "react";
import './login.css'

function Loginnn(){
const[isTex, setisTex] = useState(false)
const [isLog,setisLog] = useState( true)
const[isSer, setisSer] =useState(true)


function log(){
    setisTex(true)
    setisLog(false)
   
}
function reg(){
    setisLog(!isLog)
    setisSer(!isSer)
    
}
function out(){
    setisTex(!isTex)
    setisLog(true)
    

}

return <div>
            <div  className="divw"
            style={{
                display:isLog?"block":"none",
                
            }}>
                
                <h1>Жүйеге кіру қажет</h1>
                <button onClick={log}>Login</button> <br />
                <button onClick={reg}>Register</button>
            </div>
            <div className="divw"
            style={{
                display:isSer?"none":"block"
            }}>
                <h1>Register Form</h1>
                <input type="text" placeholder="Enter email or number"/> <br />
                <input type="text" placeholder="Enter new password"/> <br />
                <button onClick={reg}>Register</button>
            </div>
            <div className="divw"
            style={{
                display:isTex?"block":"none"
            }}>
                <h1>Бастапқы бетке қош келдіңіз</h1>
                <button onClick={out}>Log out</button>
            </div>
</div>


}


export default Loginnn
