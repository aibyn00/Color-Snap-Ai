import React from "react";
import './App.css'
function Extras(){
    return(
        <div style={{
            width:'100%',
            height:'100%',
            borderRadius:'0px 10px 10px 10px',
            backgroundColor:'white',
            position:'relative',
            bottom:'30px'
        }}>
           <h5 style={{
            marginLeft:'20px',
            fontSize:'17px',
            color:'rgb(126, 126, 126)'
           }}>Вы можете докупить желаемую услугу здесь даже после покупки билета и/или даже, если билет был забронирован онлайн/ в тур-агентстве. Тарифы за багаж в аэропорту в несколько раз дороже.
            </h5>
            <div style={{
                display:'flex'
            }}>
                <input style={{
                    width:'400px',
                    height:'35px',
                    borderRadius:'7px',
                    fontSize:'18px',
                    padding:'10px',
                    border:'0.5px solid silver',
                    marginLeft:'20px'
                }} type="text" placeholder="Фамилия" />
                <input style={{
                    width:'400px',
                    height:'35px',
                    borderRadius:'7px',
                    fontSize:'18px',
                    padding:'10px',
                    border:'0.5px solid silver',
                    marginLeft:'10px'
                    
                }} type="text" placeholder="Номер бронирования"/>
                <button style={{
                    width:'160px',
                    height:'55px',
                    padding:'10px',
                    borderRadius:'7px',
                    marginLeft:'15px',
                    border:'none',
                    backgroundColor:'rgb(172, 52, 52)',
                    color:'white',
                    fontSize:'16px'
                }}>Продолжить</button>
            </div>
        </div>
    )
}
export default Extras