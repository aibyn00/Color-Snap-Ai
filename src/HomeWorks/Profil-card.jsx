
import './Profil-card.css'

function Profil_card(props) {  


  return (
    
      <div className='visite'>
         <img src={props.imge} alt="" />
        <h2> {props.name}</h2>
        <h3>Автор: {props.abtor} </h3>
        <h3>Шыққан жылы: {props.date}</h3>
        
     
      </div>
    
  )
}






export default Profil_card
