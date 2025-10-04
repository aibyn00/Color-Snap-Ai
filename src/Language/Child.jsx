import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Child(){
    const language = useContext(ThemeContext)
    return(
        <div>
           <p>{language=='kaz'?'Менің атым Айбын':language=='ru'?'Меня зовут Айбын': language=='en'?'My name is Aibyn':""} </p> 
        </div>
    )
}
export default Child