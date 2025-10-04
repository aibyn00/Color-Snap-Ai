import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import Posts from './Posts'
import PostsDetails from './PostsDetails'
import './App.css'
function App(){
    return(
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/posts" element={<Posts/>}></Route>
                    <Route path="/posts/:id" element={<PostsDetails/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App