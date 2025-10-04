import React, { useState } from "react";

function Ternary(){
    const [isLoggendIn, setisLoggendIn] = useState (true)
    
    const isOnline = true;
    const isTmerature = 28
    const[isDark, setisDark]= useState(false);
    const[isDel, setisDel] =useState(true)
    const [isEn, setisEn] = (true)
    const []


    function btnn (){
        setisDel(!isDel)
       
        
    }
    function btn(){
        setisDark(!isDark)
    }
    function Ku(){
        setis(!)
    }
    function En (){
        setisEn(30)
    }
    return <div style={{
        height:'250px',
        padding:'10px',
        backgroundColor: isDark ?'black':'white',
        color: isDark ? 'white' : 'black',
       
    }}>  <div style={{
        display: isEn?'none':'block'
    }} >
        <div style={{
        display: isDel ? 'block' :'none',
    }}>
        {isLoggendIn && <h1>Сіз әкімшісіз</h1>}
        {!isLoggendIn && <h2>сіз қарапайым қолданушысыз</h2>}
        {isDark ?'қараңғы режим': !isDark? 'жарық режим ': 'ешқандай режим қосылмаған'} 
        {isOnline ? <p>🟢 қолданушы онлайн</p>: <p>🔴 қолданушы офлайн</p>} 
        {isTmerature>36?  <p>ыстық</p> : !isTmerature>=28 ? <p>жылы</p> >20: <p>суық</p>}
        {isDel && <h3>Көрсетілді</h3>}</div>
        <button className="btnn" onClick={btnn}>{isDel ? 'жасыру' :'көрсету'}</button>
        <button onClick={btn}>{isDark ? 'жарық'  : 'қараңғы'}</button></div>



        <div  style={{
        display: isEn?'none':'block'
    }} >
        <div style={{
        display: isDel ? 'block' :'none',
    }}>
        {isLoggendIn && <h1>Вы админ</h1>}
        {!isLoggendIn && <h2>вы обычный игрок</h2>}
        {isDark ?'тёмный режим': !isDark? 'светлый режим ': 'нету  режима'} 
        {isOnline ? <p>🟢 игрок онлайн</p>: <p>🔴 игрок офлайн</p>} 
        {isTmerature>36?  <p>жарко</p> : !isTmerature>=28 ? <p>тепло</p> >20: <p>холодно</p>}
        {isDel && <h3>Показно</h3>}</div>
        <button className="btnn" onClick={btnn}>{isDel ? 'скрыт' :'показат'}</button>
        <button onClick={btn}>{isDark ? 'светлый'  : 'тёмный'}</button></div>




        <div style={{
            display:isEn ? 'block' :'none'
        }} >
        <div style={{
        display: isDel ? 'block' :'none',
        }}>
        {isLoggendIn && <h1>Сіз әкімшісіз</h1>}
        {!isLoggendIn && <h2>сіз қарапайым қолданушысыз</h2>}
        {isDark ?'қараңғы режим': !isDark? 'жарық режим ': 'ешқандай режим қосылмаған'} 
        {isOnline ? <p>🟢 қолданушы онлайн</p>: <p>🔴 қолданушы офлайн</p>} 
        {isTmerature>36?  <p>ыстық</p> : !isTmerature>=28 ? <p>жылы</p> >20: <p>суық</p>}
        {isDel && <h3>Көрсетілді</h3>}</div>
        <button className="btnn" onClick={btnn}>{isDel ? 'жасыру' :'көрсету'}</button>
        <button onClick={btn}>{isDark ? 'жарық'  : 'қараңғы'}</button></div>
        
        
        <div>
            <button onClick={Ku}>KZ</button>
            <button onClick={Ru}>RU</button>
            <button onClick={En}>EN</button>
        </div>
    </div>
    
}



export default Ternary