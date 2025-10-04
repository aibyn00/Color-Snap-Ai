import React, { useState } from "react";

function App(){
    const [names, setNames] = useState([]) 
    const [name, setName] = useState('')
    const [text ,setText] = useState('')

    function plus(){
        if(name.trim())
        setNames([...names, name])
        setName('')

    }

    return(
        <div>
            <div>
                <input type="text"  onChange={(e) =>setText(e.target.value)} />
                <h1>{text}</h1>
            </div>
            <div>
                <input type="text" value={name} onChange={(e) =>setName(e.target.value)} />
                <button onClick={plus}>plus</button>
                <p>{names +','}</p>
            </div>
            <div>
                
            </div>

        </div>
    )

}

export default App