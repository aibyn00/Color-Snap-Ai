import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './App.css'

function PostsDetails(){
    const{id} = useParams()
    const[data, setData] = useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setData(res.data))
    })
    return(
        <div className="postdetails">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <button><Link className="link" to='/posts'>  back</Link></button>
        </div>
    )
}

export default PostsDetails