import React from "react";
import axios from "axios";
import { useState, useEffect,  } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './App.css'
import { useNavigate } from "react-router-dom";
// import Portfolio from '/Porfolio/Portfolio'
function Details(){
      const navigate = useNavigate();

       const{id} = useParams()
    const[data, setData] = useState({})
    useEffect(()=>{
        axios.get(`https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders/${id}`)
        .then(res => {console.log(res.data);
             setData(res.data)})
    },[id])
    return(
        <div className="deta">
            <div style={{
                marginTop:'0px'
            }}>
             <button className="backbtn" onClick={() => navigate("/Portfolio")}>
      ← Back
    </button>
    {/* <Link className="backbtn" to='/Portfolio'>Back</Link> */}
            <div className="dett">
           
            <div className="deta1">
                <span>{data.name}</span>
                <hr />
                <p>{data.text1}</p>
            </div>
            <div className="deta2">
                <img src={data.img} alt="" />
                <div>
                    <li>{data.text2}</li>
                    <li>{data.text3}</li>
                    <li>{data.text4}</li>
                    <li>{data.text4}</li>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}
export default Details