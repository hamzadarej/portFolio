import { Link } from "react-router-dom";
import {useEffect,useState} from "react"
//import React,{useState} from "react";//<video autoPlay loop muted src={Video} type="video"/>
//import Video from "../videos/video-1.mp4"
import profileImg from "../images/profile1.png";
import {FiDownload} from "react-icons/fi"
const Home = () => {
  const [border,setBorder]=useState("profile-box")
useEffect(() => {
 setTimeout(() => {
setBorder("profile-box1")
 },2000)
 setTimeout(() => {
  setBorder("profile-box")
   },5000)
}, [])

  return (
    <div className="home">
      <div className="home-box">
        <h1>HAMZA DAREJ</h1>
        <h3>WEB DEVELOPER</h3>

        <p>
          I had finished my Bachelor degree as an accountant in Tunisia,I had
          always been interested in programming until I moved to Germany and got
          the opportunity to start my education as a web developer. I really
          enjoy coding and I am looking forward to a new challenge in my career.
        </p>
        <Link to="/Contact">
          <button>Contact me!</button>
        </Link>
        <a className="download" href="/../CV.pdf" download> <FiDownload/> Download my CV</a>
       
      </div>
      <div className="profile">
        <div className={border}>
          <img src={profileImg} alt="profile" />
        </div>
        
      </div>
    </div>
  );
};
export default Home;
