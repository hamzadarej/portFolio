import { Link } from "react-router-dom";
//import React,{useState} from "react";
import Video from "../videos/video-1.mp4"
const Home = () => {
  return (
    <div className="home">
      <div className="home-box">
        
      <video autoPlay loop muted src={Video} type="video"/>
      <h1>HAMZA DAREJ</h1>
      <h3>WEB DEVELOPER</h3>
      
      <p>
              I had finished my Bachelor degree as an accountant in Tunisia,I had
              always been interested in programming until I moved to Germany and
              got the opportunity to start my education as a web developer. I
              really enjoy coding and I am looking forward to a new challenge in
              my career.
            </p>
      <Link to="/Contact"><button>Contact me!</button></Link>
         
      
        </div>
    </div>
    
  );
};
export default Home;
