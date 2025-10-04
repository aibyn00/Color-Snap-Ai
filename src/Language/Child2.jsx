import React , {useContext} from "react";
import ThemeContext from "./ThemeContext";
function Child2(){
     const language = useContext(ThemeContext)
    return(
        <div>
            <p>{language}</p> 
        </div>
    )
}
export default Child2