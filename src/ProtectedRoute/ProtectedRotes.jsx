import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRotes({isAc, children}){
    return isAc? children : <Navigate to='/login'/>

}

export default ProtectedRotes