import {use, useEffect, useState} from "react";
import Child from "./Child"

function App (){
    const[taskName, setTaskName]= useState('')
    const[tasks, setTasks] = useState([])
    // const[open , setOpen] = useState(true)
    
    useEffect(()=>{
        alert('tapsyrma kosyldi')

    } , {tasks})
return(
    <div>
        <input type="text" value={taskName} onChange={(e) =>setTaskName(e.target.value)} />
                <button onClick={()=>{
                    setTasks([...tasks, {taskName:taskName}])
                }}>plus</button>
                {tasks.map((task))=> {
                    return(
                        <div>
                            {task.taskName }
                        </div>
                    )
                }}
                
        {/* {open && <Child/>}
        <button onClick={() => setOpen(!open)}>component</button> */}


    </div>
    )
}

export default App