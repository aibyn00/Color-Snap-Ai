import './App.css'
import React, {useState} from 'react';

function App(){
    // const[task, setTask] = useState('')
    // const[tasks, setTasks] = useState(['Aidar','Aibyn'])
    // const handleRemove = (id) =>{
    //     setTasks(tasks.filter((setTask,task) =>task!=id))
    // }

    // function add(){
    //     if(task.trim())
    //     setTasks([...tasks, task])
    //     setTask('')
    
    
    
    // }

   


const [task, setTask] = useState('');
const [tasks, setTasks] = useState([
  { id: 1, text: 'Coding', done: true },
  { id: 2, text: 'Reading', done: false },
]);

const add = () => {
  if (task.trim()) {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask('');
  }
};

const toggleDone = (id) => {
  setTasks(tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t));
};

const handleRemove = (id) => {
  setTasks(tasks.filter((t) => t.id !== id));
};





    const[number, setNumber] = useState(24+':')
    const[numbers, setNumbers] = useState(0)

    function bastay(){  
      
        setNumbers(numbers +1)
        if (numbers = 0){
            
            setNumber(number-1)
            setNumbers(numbers = 59)
        }
        
    }




    return(
        <div className='div1'>
            
            

        <div className='family'>
            <div className='box1'>
                <button className='pro'></button><br />
                <button>🏠</button><br />
                <button>📊</button><br />
                <button className='exit'>🚪</button>      <br />     
            
            </div>
            {/* <div className='div2'>
                 <h1>To Do List</h1>
                <input type='text' value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={add}>add</button>
                {tasks.map((a)=>{
                    return(
                        <div className='div3'>
                            <input type="checkbox" 
                            // checked={t.done} onChange={() => toggleDone(t.id)}
                            />
                        <span>{a}</span>
                <button onClick={()=>handleRemove(task)}>🗑️</button>
                 </div>
                        
                    )
                    
                })}
            </div> */}












          


<div className='div2'>
  <h2 style={{ marginBottom: '10px', color: '#333' }}>ToDo List</h2>

  <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
    <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Жаңа тапсырма...'

    style={{
        flex: 1,
        padding: '8px 12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '15px'
      }}
    />
    <button onClick={add}
      
    style={{
        padding: '8px 14px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      Add
    </button>
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {tasks.map((t) => (
      <div
        key={t.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        <input  className='faty'
         type="checkbox"
          checked={t.done}
          onChange={() => toggleDone(t.id)}
        />
        <span className='spy'
          style={{
            flex: 1,
            marginLeft: '10px',
            textDecoration: t.done ? 'line-through' : 'none',
            color: t.done ? 'gray' : '#222'
          }}
        >
          {t.text}
        </span>
        <button
          onClick={() => handleRemove(t.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          🗑️
        </button>
      </div>
    ))}
  </div>
</div>





            <div className='box2'>
                <div className="div6">
                <h2>Pomodoro</h2>
                <span id="min">{number}</span>
                <span id="sec">{numbers}</span>
                </div>
                <div className='time'>
                    <h2><h1>|</h1>уақыт қою</h2>
                        <p>timers</p>
                        <select name="" >
                            <option value="">25min</option>
                            <option value="">20min</option>
                            <option value="">15min</option>
                            <option value="">10min</option>
                            
                            
                        </select><br />
                <button onClick={bastay } >start</button>
                <button  >stop</button>
                
            </div>
            </div>
    
        </div>
        </div>
    );
}























export default App