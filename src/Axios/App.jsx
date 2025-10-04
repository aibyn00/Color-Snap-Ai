import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import './App.css'
function App(){
    const[page , setPage] = useState('three')
    const[button, setButton] = useState(true)
    const[data, setData] = useState([])
    const[name, setName] = useState('')
    const[email , setEmail]= useState('')
    const[phone , setPhone]= useState('')
    const[city , setCity] = useState('')
    const[reason , setReason] = useState('')
    const[orders, setOrders] = useState([])
    useEffect(()=>{
        axios.get('https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders')
        .then(res=>{
            setData(res.data)
        })
    },[])
       function send() {
        const newOrder = {
        order1: name,
        order2: email,
        order3: phone,
        order4: city,
        order5: reason
    };

        axios.post('https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders', newOrder)
        .then(res => {
            console.log(res.data);
            setOrders(prev => [...prev, res.data]);
        });

    setButton(false);
}

        function back(){
            setButton(true)
            setPage('three')
        }

    return(
        <div style={{
            fontFamily:'sans-serif'
        }}>
        {page=='first'?
            <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="тапсырыс" /> <br />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="тапсырыс" /> <br />
        <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="тапсырыс"/> <br />
        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="сусын"/> <br />
        <input type="text" onChange={(e)=>setReason(e.target.value)} placeholder="қосымша"/> <br />
        <button style={{
            display:button==true? '' : 'none',
            
        }} onClick={send}>тапсырыс беру</button> <br />
        <button onClick={back}>артқа</button>

        </div>:
        page=='second'?
        <div>
        <div style={{
            display:'flex',
        }}>
            {data.map((item, index) => (
  <div key={index}>
    <p>1: {item.order1}</p>
    <p>2: {item.order2}</p>
    <p>3: {item.order3}</p>
    <p>4: {item.order4}</p>
    <p>5: {item.order5}</p>
    <hr />
  </div>
))}

        
        </div>
        <button onClick={()=>setPage('three')}>артқа</button>
        </div>
        :page=='three'
        ?<div>
            <h1>Басты бет</h1>
            <button onClick={()=>setPage('first')}>тапсырыс беру</button>
            <button onClick={()=>setPage('second')}>тапсырыстар тізімі</button>
        </div>
    :''}
    </div>
        
 )
}
export default App