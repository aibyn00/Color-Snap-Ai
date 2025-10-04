import React, {useEffect} from "react";
import { useState } from "react";

function Child (){
    const[count ,setCount] = useState(0)
    let inv =''
    useEffect(()=> {
        inv=setInterval(() => {
            console.log('Helo world ')
        } ,1000);
        alert(' компонент ашылды')


         return() =>{
           
            alert('компонент өщірілді')
            clearInterval(inv)
         }
    } , [])

    useEffect(()=> {
        alert('компонентт жаңарды')
    } , [count])




    return(
        <div>
            Child
            <button onClick={() => setCount(count+1)}>+</button>
            {count}
        </div>
    )
}

export default Child