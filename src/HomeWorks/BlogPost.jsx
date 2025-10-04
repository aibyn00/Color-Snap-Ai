
import './App.css'



function BlogPost(props){
   return (

    <div className="blog">
     <h2>{props.blog}</h2>
     <p>{props.post}</p>
     </div>

   )
}

export default    BlogPost