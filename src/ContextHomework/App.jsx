import React, {useState} from "react";

import ThemeContext from './LanguageProvider'
import Test from './Test';
import Main from './Main';
import './App.css'
function App(){
    const [language,  setlanguage]= useState('kaz')
    // function Change(){
    //    setlanguage(value)
    // }
    if(language=='kaz'){
         
    }
     else if(language=='ru'){
         
    }
    else if(language=='en'){
        
    }
    return(
        <div className="app">
            <h1> 🕶️  HomeWork useContext</h1>
            <ThemeContext.Provider value={language}>
                <Test/>
                
            </ThemeContext.Provider>
             <select onChange={(e)=>setlanguage(e.target.value)}>
                <option value="kaz">Қазақша</option>
                <option value="ru">Руский</option>
                <option value="en">English</option>
            </select>
        </div>
    )
}
export default App