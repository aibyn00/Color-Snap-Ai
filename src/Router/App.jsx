import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contents from "./Contents";
import Page from "./Page";
import Profile from "./Profile";
import Navbar from "./Navbar";

import './App.css'
function App(){
    return(
        <div className="mama">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Contents" element={<Contents/>}></Route>
                    <Route path="/Profile" element={<Profile/>}></Route>
                    <Route path="/Page" element={<Page/>}></Route>
                </Routes>
            </Router>
            <div className="son">
                
            </div>
        </div>
    )
}
export default App