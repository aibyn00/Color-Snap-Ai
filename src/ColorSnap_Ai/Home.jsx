import React, { useContext } from "react";
import { useState,useEffect } from "react";
import { Link , useHref } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ThemeContext from "./ThemeContext";

function Home(){
    // const[language, setLanguage] = useState('kaz')
    // const theme = useContext(ThemeContext)
  const { language } = useContext(ThemeContext);
      const { theme } = useContext(ThemeContext);

    
    return(
        <div className={` home ${theme}`}>
            <div className="home1">
            <h1> {language=='kaz'?'Бұл сайт Дизайнерлердің жұмысын' :language=='re'?'Этот сайт является работой дизайнеров':language=='en'?'This site is a work of designers':''} </h1>
                <h1>{language=='kaz'?'жеңілдету үшін арналған ' :language=='re'?'предназначенный для облегчения':language=='en'?'intended to facilitate':''} </h1>
            <div className="home2">
<Link style={{textDecoration:'none',
            
}} to="/color">
                    <button class="button">
  <div  class="button-outer">
    <div class="button-inner">  
      <span style={{
        fontSize:'18px',
            fontWeight:'bold'
      }}>Color LIst</span>
    </div>
  </div>
</button></Link>
<Link style={{textDecoration:'none',
marginLeft:'20px'
            
}} to="/colorai">
                    <button class="button">
  <div  class="button-outer">
    <div class="button-inner">
      <span style={{
        fontSize:'18px',
            fontWeight:'bold'
      }}>Color Ai</span>
    </div>
  </div>
</button></Link>

                
             {/* <Link className="btns" to="/color">Color LIst</Link> */}
            {/* <Link className="btns" to="/colorai">Color Ai
          
            </Link> */}
            <div className="lottie-container1">
     <DotLottieReact className="gear"
      src=" https://lottie.host/5c266041-bd1e-4b1b-95c2-e9bf37cad2de/WThCoRO7Wm.lottie"
      loop
      autoplay
    />
    </div>
             </div>
            </div>
             {/* <div className="lottie-container">
     <DotLottieReact className="gear"
      src="https://lottie.host/6afc723a-42dd-492d-a5cf-cd1dae3cd978/aFxpSSF6Wt.lottie"
      loop
      autoplay
    />
    </div> */}
    
           
           
        </div>
    )
}
export default Home