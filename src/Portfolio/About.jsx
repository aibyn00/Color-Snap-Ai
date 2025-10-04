import React from "react";
import { FaMedal ,FaGlobe, FaFile } from "react-icons/fa";
import './App.css'
function About(){
    return(
        <div className="about">

            <div className="aboutdiv1">
            <h1 className="aboutdiv11">About Me</h1>
            <span className="aboutdiv12"></span>
            </div>
            <div style={{
                display:'flex'
            }}>
                <div className="aboutdiv2">
                    
                    <h1 className="aboutdiv21">Hello, I'm</h1>
                    <h1  className="aboutdiv22">Nagashybai Aibyn</h1>
                    <span  className="aboutdiv23">Мен — жас веб-дамытуға қызығатын жас маманмын.
                         Frontend және Backend бағыттарында өз білімімді тереңдетіп жатырмын.
                          React, Node.js, және заманауи веб-технологияларды қолданып жобалар жасаймын.
                          Әрқашан жаңа нәрсе үйренуге және тәжірибемді арттыруға дайынмын.
                           Болашақта кәсіби бағдарламашы ретінде үлкен жобаларда жұмыс істеп, IT саласына үлес қосқым келеді.
                    </span>
                    <button  className="aboutdiv24">View Projects</button>
                     <button  className="aboutdiv25">Documents</button>

                </div>
                <div className="aboutdiv3">
                    <img  className="aboutdiv31" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SlEejZYEDQo1kY8kd6BbWnF8pCGi97BUCg&s"/>
                </div>
            </div>
            <div className="aboutdiv4">
                <div  className="aboutdiv41">
                    <div style={{display:'flex'}}>
                        <div  className="aboutdiv411">
                    <FaFile /></div>
                    <span className="aboutdiv413">3</span></div>
                    <span  className="aboutdiv412">TOTAL PROJECTS</span>

                </div>
                <div  className="aboutdiv41">
                    <div style={{display:'flex'}}>
                        <div  className="aboutdiv411">
                    <FaMedal /></div>
                    <span className="aboutdiv413">0</span></div>
                    <span  className="aboutdiv412">CERTIFICATES</span>
                </div>
                <div  className="aboutdiv41">
                    <div style={{display:'flex'}}>
                        <div className="aboutdiv411">
                    <FaGlobe /></div>
                    <span className="aboutdiv413">10</span></div>
                    <span  className="aboutdiv412">YEARS OF EXPERIENCE</span>
                </div>
            </div>
        </div>
    )
}
export default About