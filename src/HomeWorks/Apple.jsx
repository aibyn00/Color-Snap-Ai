import '/apple.css'






function Apple(props){

    return(
        <div className='card'>

        <img src={props.imges} alt='' />
        <h2> {props.names}</h2>
        <h3>Price:{props.price} </h3>
        </div>

    )
}


export default Apple