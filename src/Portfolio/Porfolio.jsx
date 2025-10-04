import React from "react";
import { useState } from "react";
import { FaMedal ,FaNodeJs, FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import Notes_web from "./Website/Notes_web.png"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,  } from "react-icons/si";

function Portfolio(){

    const[data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://68848e23745306380a389d2e.mockapi.io/order/a1/Orders')
        .then(res=> setData(res.data))

    },[])




    const[active, setActive] = useState('first')
    function first(){
        setActive('first')
    }
    function second(){
        setActive('second')
    }
    function three(){
        setActive('three')
    }
    return(
        <div className="port">
            <div className="title">
            <h1>Portfolio Showcase</h1>
            </div>
            <div className="navi">
                <div onClick={first} className={active=='first'? 'navi2' :'navi1'}>
                     <FaFile/> <br />
                    <span>Projects</span>
                </div>
                <div onClick={second} className={active=='second'? 'navi2' :'navi1'}>
                    <FaMedal/> <br />
                    <span>Certificates</span>
                </div>
                <div onClick={three} className={active=='three'? 'navi2' :'navi1'}>
                    <FaNodeJs/> <br />
                    <span>Tech Stack</span>
                </div>
            </div>
            <div>
                {active=='first'?
                <div className="box">
                       
                {data.map(post=>{
                return(
                    <div className="project">
                        <img src={post.img} alt="" />
                        <span>{post.name}</span>
                        <p>{post.text}</p>
                        <div style={{display:'flex',
                            marginTop:'20px'
                        }}>
                        <a href="">просмотр</a>
                        <div className="linkk">
                             <Link className="details" to={`/Details/${post.id}`}>Details</Link>
                        </div>
                       </div>
                    </div>
                        )
                    })}
                    
                </div>:
                active=='second'?
                <div className="box">
                       <div className="certi ">
                        <h1>Ешқандай сертификат жоқ</h1>
                       </div>
                </div>:
                active=='three'?
                <div className="box">
                       <div className="tech1">
                            

                              <div className="tech"> <SiHtml5 size={70} color="red" /></div>
                              <div className="tech">  <SiCss3 size={70} color="blue" /></div>
                               <div className="tech"><SiJavascript size={70} color="gold" /></div>
                                <div className="tech"><SiReact size={70} color="aqua" /></div>
                                <div className="tech"><SiNodedotjs size={70} color="green" /> </div>
                       
                       </div>
                </div>:''}
                
                
            </div>
        </div>
    )
}
export default Portfolio