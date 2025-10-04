import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
// import About from "./About"
// import Contact from "./Contact"
// import Portfolio from "./Porfolio"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Portfolio from "./Porfolio";
import Contact from "./Contact";
import About from "./About";
import Details from "./Detail";
function App(){
    return(
        <div>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Portfolio" element={<Portfolio/>}></Route>
                    <Route path="/Details/:id" element={<Details/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App