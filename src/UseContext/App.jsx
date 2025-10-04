import React, {useState} from "react";

import ThemeContext from './ThemeContext'
import Child from './Child';
import Child2 from './Child2';

function App(){
    const [theme,  setTheme]= useState('light')
    function Change(){
        if(theme=='light'){
            setTheme('dark')
            document.body.style.backgroundColor='white'
            document.body.style.color='black'
        }else{
            setTheme('light')
            document.body.style.backgroundColor='black'
            document.body.style.color='white'
        }
    }
    return(
        <div>
            <ThemeContext.Provider value={theme}>
                <Child/>
                <Child2/>
            </ThemeContext.Provider>
            <button onClick={Change}>{theme}</button>
        </div>
    )
}
export default App