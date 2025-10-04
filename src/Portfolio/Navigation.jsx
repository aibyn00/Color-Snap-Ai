import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
function Navigation (){
    const [color, setColor] = useState('first')
    function home(){
        setColor('first')
    }
     function about(){
        setColor('second')
    }
     function port(){
        setColor('three')
    }
     function contact(){
        setColor('four')
    }
    return(
        <div className="navigation">
            <span  className="logo">Aibyn</span>
            <Link onClick={home} className={color=='first'?'links1':'links'} to='/'>Home</Link>
            <Link onClick={about} className={color=='second'?'links1':'links'} to='/About'>About</Link>
            <Link  onClick={port} className={color=='three'?'links1':'links'} to='/Portfolio'>Portfolio</Link>
            {/* <Link  onClick={contact} className={color=='four'?'links1':'links'} to='/Contact'>Contact</Link> */}
        </div>
    )


}
export default Navigation