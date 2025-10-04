import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRotes({isLogin, children}){
    return isLogin? children :  <Navigate  to='/Tizim'/>
   
    
}

export default ProtectedRotes