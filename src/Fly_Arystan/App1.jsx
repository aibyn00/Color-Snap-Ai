import React , {useState, useEffect} from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import CitySelect from "./CitySelect";
import Tizim from "./Tizim";
import Register1 from './Register1'
import ProtectedRotes from "./ProtectedRoute";
import Help from "./Help";

function App1(){
    const[isLogin, setIsLogin] = useState(false)
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    {/* <Route path="/Tizim" element={<Tizim/>}></Route> */}
                    <Route path="/Regiter1" element={<Register1 setIsLogin={setIsLogin}/> }/>
                    <Route path="/Tizim" element={
                        <ProtectedRotes isLogin={isLogin}>
                            <Tizim/>
                        </ProtectedRotes>
                    }/>
                    <Route path="/Help" element={<Help/>}></Route>
                    <Route></Route>
                    <Route></Route>
                    
                </Routes>
            </Router>
        </div>
    )
}

export default App1