import './App.css'
function AuthorDetails(props){
   return (

    <div className="auto">
     <h2>Автор:{props.author}</h2>
     <p>{props.details}</p>
     </div>

   )
}

export default  AuthorDetails