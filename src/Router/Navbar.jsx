import React from "react";
import{Link} from 'react-router-dom'
import './App.css'
function Navbar(){
    return(
        <div  className="navi">
            <Link style={{
                textDecoration:'none'
            }} to="/"><p>Home</p></Link>
            <Link style={{
                textDecoration:'none'
            }}  to="/About"><p>About</p></Link>
            <Link style={{
                textDecoration:'none'
            }}  to="/Contents"><p>Contents</p></Link>
            <Link style={{
                textDecoration:'none'
            }}  to="/Profile"><p>Profile</p></Link>
            <Link style={{
                textDecoration:'none'
            }}  to="/Page"><p>Page</p></Link>
        </div>
    ) 
}
export default Navbar