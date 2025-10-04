import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register1 = ({setIsLogin, }) =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState ('')
    const [password , setPassword] = useState('')
    const HandleRegister = ()=>{
        if (email && password!==0){  
        setIsLogin(true);
        navigate("/Tizim");
    }
     else (email && password ==0)
        alert('Тіркеліңіз!')
    }
    return(
        <div>
            <h2>Тіркелу бөлімі</h2>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={HandleRegister}>Тіркелу</button>
        </div>
    )
}

export default Register1