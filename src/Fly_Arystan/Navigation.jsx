import React, { useState } from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaEarthAmericas,FaCirclePlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import{Link} from 'react-router-dom'
import './App.css'
function Navigation(){
    const[clas ,setClas] = useState('bilet')
    function bilet(){
        setClas('bilet')
    }
    function letai(){
        setClas('letai')
    }
    function bagaj(){
        setClas('bagaj')
    }
    function online(){
        setClas('online')
    }
    return(
        <div className="inputs1">
            
            <button  onClick={bilet} style={{width:'140px'}} className={clas=='bilet' ? 'activ' :'btns'}><Link style={{
                textDecoration:'none',
                color:clas=='bilet'?'red' :'',
                fontSize:'17px',
                fontFamily:'sans-serif'
                
            }} to="/"><PiAirplaneTiltFill style=    {{color:clas=='bilet'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }} /> Билет</Link>
            </button>
            <button onClick={letai}  style={{width:'230px',}} className={clas=='letai' ? 'activ' :'btns'}><Link style={{
                textDecoration:'none',
                color:clas=='letai'?'red' :'',
                fontSize:'17px',
                fontFamily:'sans-serif'
            }} to="/World"><FaEarthAmericas style={{color:clas=='letai'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }}/>   Летай по миру</Link></button>
            <button onClick={bagaj}  style={{width:'230px',}} className={clas=='bagaj' ? 'activ' :'btns'}><Link style={{
                textDecoration:'none',
                color:clas=='bagaj'?'red' :'',
                fontSize:'17px',
                fontFamily:'sans-serif'
            }} to="/Extras"><FaCirclePlus style={{color:clas=='bagaj'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
            }} />  Багаж,место,питание</Link></button>
            <button onClick={online}  style={{width:'230px',}} className={clas=='online' ? 'activ' :'btns'}><Link style={{
                textDecoration:'none',
                color:clas=='online'?'red' :'',
                fontSize:'17px',
                fontFamily:'sans-serif'
            }} to="/Online"><FaCheckCircle  style={{color:clas=='online'?'red' :'',
                marginRight:'7px',
                fontSize:'20px',
                
            }}/> Онлайн-регистрация</Link></button>
                            
                         
            
        </div>
    ) 
}
export default Navigation
