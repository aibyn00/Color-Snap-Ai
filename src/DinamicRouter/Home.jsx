import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function Home(){
    return(
        <div className="home">
            <h1>Home</h1>
            <Link className="myposts" to='posts'>My Posts</Link>
        </div>
    )
}
export default Home