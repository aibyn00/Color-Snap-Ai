import {useState} from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRotes from "./ProtectedRotes";

function App(){
    const[isAc, setIsAc] = useState(false)
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login setIsAc={setIsAc}/> }/>
                    <Route path="/dashboard" element={
                        <ProtectedRotes isAc={isAc}>
                            <Dashboard/>
                        </ProtectedRotes>
                    }/>
                    
                </Routes>
            </Router>
        </div>
    )
}
 export default App