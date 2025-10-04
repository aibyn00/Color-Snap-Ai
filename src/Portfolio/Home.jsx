import React, { useEffect, useState } from "react";
import "./App.css";
import {FaCog , FaGithub , FaLinkedin, FaInstagram ,FaRegFolder,FaRegArrowAltCircleRight, FaRegEnvelope} from "react-icons/fa"
// import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
// import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Home() {
  const [loading, setLoading] = useState(true);
    const[clas , setClas] = useState(true)

useEffect(() => {
  const alreadyOpened = sessionStorage.getItem("alreadyOpened");

  if (!alreadyOpened) {
    const timer = setTimeout(() => {
      setLoading(false);
      setClas(false);
      sessionStorage.setItem("alreadyOpened", "true");
    }, 5000);

    return () => clearTimeout(timer);
  } else {
    setLoading(false);
    setClas(false);
  }
}, []);


  return (
    <div className={clas?'app':'app1'}>
    <div>
      {loading ? (
        <div className="opening">

        <div className="intro">
          <span className="intro-text"> Welcome </span>
          <span className="intro-text2"> To</span>
          <span className="intro-text3"> My</span>
        </div>
        <div className="intro1">
             <span className="intro-text1"> Portfolio </span>
              <span className="intro-text4"> Website</span>
        </div>
        </div>
      ) : (
        <div className="content">
          <div className="intro01">
            <div className="intro011">
            <FaCog className="cog"/> Rady to innovate
            </div>
          </div>
          <div className="intro02">
            <span className="intro021">Frontned </span> <br />
            <span className="intro022">Developer</span>
          </div>
          <div className="intro03">
            <span className="intro031">Student For Amjit Cyber School</span>
          </div>
          <div className="intro04">
            <span className="intro041">Create innovative, functional and user-</span>
              <span className="intro041">friendly websites for digital technologies</span>
          </div>
          <div className="intro05">
            <div className="intro051">React</div>
            <div className="intro051">Javascript</div>
            <div className="intro051">Node.js</div>
            <div className="intro051">HTML</div>
          </div>
          <div className="intro06">
            <button className="intro061">Projects
              <span className="folder"><FaRegFolder /></span>
              <span className="arrow"><FaRegArrowAltCircleRight /></span></button>
            <button className="intro061">Contact  <span><FaRegEnvelope/> </span></button>
          </div>
          <div className="intro07">
            <span className="intro071"> <a href="https://github.com/aibyn00"><FaGithub /></a></span>
            <span className="intro071"><FaLinkedin/></span>
            <span className="intro071"><FaInstagram/></span>
          </div>
        </div>
        
      )}
    </div>
    {loading?('')
:(<div className="anim"><DotLottieReact
       src="https://lottie.host/99fcf44a-1ad6-4e59-84b8-30c0ca523d90/fnfbuLTnrI.lottie"
      loop
      autoplay
    /></div>)    }
    </div>
  );
}

export default Home