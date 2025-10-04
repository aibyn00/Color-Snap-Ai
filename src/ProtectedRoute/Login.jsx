import { useNavigate } from "react-router-dom";

const Login = ({setIsAc}) =>{
    const navigate = useNavigate();

    const HandleLogin = ()=>{
        setIsAc(true);
        navigate("/dashboard");
        
    }
    return(
        <div>
            <h2>Login </h2>
            <button onClick={HandleLogin}> Login </button>
        </div>
    )
}

export default Login 