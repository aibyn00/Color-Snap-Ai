import React, { use, useState } from "react";
import './Apps.css'
function App(){
    const[name ,setName] = useState('')
    const[tenge , setTenge] =useState("ten")
    const [currency, setCurrency] = useState(0)  
    const [num, setNum] = useState('')
    function get_data(e){
        setName(e.target.value)
    }
    

    return(
        <div className="div1"> 
           
            <input type="text" onChange={get_data} />

            {name=='' ? <p>name</p> : <p>{name}</p>}<br />

            
            {/* { tenge=='ten' ? '1000₸' : tenge=='rub' ? currency/6.70+'₽' : tenge=='dol' currency/522+'$' : tenge=='eur' ? 1000/610+'€' :'0'} <br /> */}

            {/* <select name="" id="" onChange={(e)=>setTenge (e.target.value)}> 
            <option value="ten">₸</option>
            <option value="rub">₽</option>
            <option value="dol">$</option>
            <option value="eur"> €</option>
            </select><br /> */}



            <input type="text" onChange={(e)=>setNum(e.target.value)} />
            <select name="" id="" onChange={(e)=>setCurrency(e.target.value)}>
                <option value="tenge">tenge</option>
                <option value="rubl">рубль</option>
                <option value="dollar">dollar</option>
                <option value="euro">euro</option>
                <option value="som">сом</option>
                <option value="yan">юань</option>
                <option value="ien">иена</option>
                <option value="bon">вон</option>
                <option value="ryp">рупия</option>
                <option value="lir">лира</option>
            </select>
        <p>{currency== 'tenge' ?num+"tenge" :currency =='rubl' ? num/6.7 + "rubl":
        currency== 'dollar' ? num/522 + "dollar" : currency=='euro' ?num/610 + "euro": currency== 'yan' ? num/72 +"юань":
         currency=='som' ? num/5.97 +"сом": currency=='ien'? num/3.55 +"иена": currency=='bon'? num/0.38 +"вон" :
         currency=='ryp' ? num/1.74 +"рупия" : 
         currency=='lir'? num/13 +"лира": 'валюта таңдаңыз'} </p>
        </div>
    );

}

export default App;