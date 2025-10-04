import React, { useEffect } from "react";
import axios from "axios";
import { Link, useFetcher } from "react-router-dom";
import { useState } from "react";
import './App.css'

function Posts(){
    const[data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> setData(res.data))

    },[])
    return(
        <div className="post">
            <button className="btn"><Link className="link" to='/'>Back</Link></button>
            
            {data.map(post=>{
                return(
                    <div className="postdiv">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link className="more" to={`/posts/${post.id}`}>More information</Link>
                    </div>
                )
            })}
        </div>
    )


}
export default Posts