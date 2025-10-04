import React , {useContext} from "react";
import ThemeContext from "./LanguageProvider";
import Main from './Main'
import './App.css'
function Test(){
     const language = useContext(ThemeContext)
    return(
        <div className="test"> 
            <h1></h1>
            <h1>{language=='kaz'?'Бұл тест компоненті':language=='ru'?
           'Это тестовый компонент': language=='en'?'This is Test component   ':""} </h1> 
           <Main/>
        </div>
    )
}
export default Test