import { Link } from "react-router-dom";
//import React,{useState} from "react";//<video autoPlay loop muted src={Video} type="video"/>
//import Video from "../videos/video-1.mp4"
import profileImg from "../images/profile1.png";
const Home = () => {
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
      </div>
      <div className="profile">
        <div>
          <img src={profileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default Home;
