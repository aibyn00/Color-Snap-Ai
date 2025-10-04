import React from "react";
import './App.css'
function Profile(){
    return(
        <div>
            <h1>Profile page</h1>
            <div style={{
                width:'380px',
                height:'580px',
                borderRadius:'20px',
                border:'1px solid black',
                paddingLeft:'20px',
                paddingTop:'20px',
                marginLeft:'36%',
                boxShadow:'0px 0px 10px 0px black',

            }}>
                <form style={{
                    width:'360px',
                    height:'560px',
                    
                    borderRadius:'10px',
                    padding:'0px',
                    
                }} action="">
                    <input style={{
                        marginTop:'30px',
                        width:'320px',
                        height:'30px',
                        textAlign:'center',
                        borderRadius:'10px',
                        fontSize:'16px',

                    }} type="name" /> <br />
                    <input style={{
                        marginTop:'30px',
                        width:'320px',
                        height:'30px',
                        textAlign:'center',
                        borderRadius:'10px',
                        fontSize:'16px',
                        
                    }} type="text" /> <br />
                    <button style={{
                         marginTop:'30px',
                        width:'320px',
                        height:'40px',
                        textAlign:'center',
                        borderRadius:'10px',
                        fontSize:'20px'
                    }} >send</button> <br/>

                </form>
            </div>
        </div>
    )
}
export default Profile