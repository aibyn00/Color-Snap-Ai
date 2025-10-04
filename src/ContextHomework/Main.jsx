import React, { useContext } from "react";
import ThemeContext from "./LanguageProvider";
import './App.css'
function Main(){
    const language = useContext(ThemeContext)
    return(
        <div className="main
        ">
            <h1>This is Main component 🕵️</h1>
            <hr />
            <div className="text">
           <p>{language=='kaz'?'Миссия түн ортасында басталадыю':language=='ru'?
           'Миссия начинается в полночь.': language=='en'?'Mission starts at midnight.':""} </p> 
           </div>
          
        </div>
    )
}
export default Main