import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './App.css'
import { FaHouse, FaPalette, FaGear, FaRightToBracket, FaGamepad, FaRobot,FaMicrochip, FaUser,FaEyeDropper } from "react-icons/fa6";
import ThemeContext from "./ThemeContext";
import { GiArtificialIntelligence } from "react-icons/gi";
function Navigation() {
    const { language, setLanguage, ChangeTheme, user } = useContext(ThemeContext);
    const { theme,setTheme } = useContext(ThemeContext);
    function Change(){
      if(theme=="light"){
        setTheme("dark")
      }else{
        setTheme("light")
      }
    }
  return (
    <div className="navi">
      <div className={`navigation ${theme}`}>
        <Link className="link" to='/'> <FaHouse className="icon" /> <span className="span1">Home</span></Link> <br />
        <Link className="link" to='/color'> <FaPalette className="icon" /><span className="span1"> Color List</span></Link> <br />
        <Link className="link" to='/colorai'> 
        {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
  <path fillRule="evenodd" d="M16.098 2.598a3.75 3.75 0 1 1 3.622 6.275l-1.72.46V12a.75.75 0 0 1-.22.53l-.75.75a.75.75 0 0 1-1.06 0l-.97-.97-7.94 7.94a2.56 2.56 0 0 1-1.81.75 1.06 1.06 0 0 0-.75.31l-.97.97a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 0-1.06l.97-.97a1.06 1.06 0 0 0 .31-.75c0-.68.27-1.33.75-1.81L11.69 9l-.97-.97a.75.75 0 0 1 0-1.06l.75-.75A.75.75 0 0 1 12 6h2.666l.461-1.72c.165-.617.49-1.2.971-1.682Zm-3.348 7.463L4.81 18a1.06 1.06 0 0 0-.31.75c0 .318-.06.63-.172.922a2.56 2.56 0 0 1 .922-.172c.281 0 .551-.112.75-.31l7.94-7.94-1.19-1.19Z" clipRule="evenodd" />
</svg> */}
{/* <FaGear className="icon" /> */}
<FaEyeDropper className="icon"/>
<span className="span1">
    Color Ai
    </span> 
    </Link> <br />
        <Link className="link" to='/aicolor'> <FaMicrochip className="icon"/> <span className="span1">Ai</span></Link> <br />
        {/* <Link className="link" to='/colorpicker'> <FaGamepad className="icon" /> <span className="span1">Game</span></Link> <br /> */}
        <Link className="link" to='/login'>
          {user ? (
            <>
              <FaUser className="icon" /> <span className="span1">Profile</span>
            </>
          ) : (
            <>
              <FaRightToBracket className="icon" /> <span className="span1">Login</span>
            </>
          )}
        </Link> <br />
        
        <div className="themes">
          <div className="switch1">
            <label className="switch" htmlFor="switch">

              <input id="switch" onClick={Change} type="checkbox"
              //  checked={theme === "light"}
                   className="circle"/>
              
              <div className="sun svg">
                <span className="dot"></span>
              </div>
              <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="moon svg">
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </label>

            <select
              className="selects"
              value={language}
              onKeyDown={(e)=>e.key==="Alt"+"A" && value(kaz)}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="kaz">Қазақша</option>
              <option value="re">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navigation;
