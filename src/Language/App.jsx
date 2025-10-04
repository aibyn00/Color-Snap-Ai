import React, {useState} from "react";

import ThemeContext from './ThemeContext'
import Child from './Child';
import Child2 from './Child2';

function App(){
    const [language,  setlanguage]= useState('kaz')
    // function Change(){
    //    setlanguage(value)
    // }
    if(language=='kaz'){
         document.body.style.backgroundColor='aqua'
            document.body.style.color='black'
            
    }
     else if(language=='ru'){
         document.body.style.backgroundColor='orange'
            document.body.style.color='white'
    }
    else if(language=='en'){
         document.body.style.backgroundColor='aquamarine'
            document.body.style.color='red'
    }
    return(
        <div style={{
            fontFamily:'sans-serif',
            fontSize:'40px'
        }}>
            <ThemeContext.Provider value={language}>
                <Child/>
                <Child2/>
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