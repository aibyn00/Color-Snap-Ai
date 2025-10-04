import './Helloworld.css'

function Hello(props) {  


  return (
    
      <div className='visit'>

        <h2 style={{color:'white', fontSize:'75px', fontFamily:'sans-serif'}}>Аты-жөні: {props.name}</h2>
        <h3 style={{color:'white', fontSize:'60px', fontFamily:'sans-serif'}}>Мамандығы: {props.age} </h3>
        <h3 style={{color:'white', fontSize:'60px', fontFamily:'sans-serif'}}>Қала: {props.height} </h3>
      </div>
    
  )
}






export default Hello
