import React,{ useState} from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  const [show , setShow]= useState("");
  const [navActive , setNavActive]= useState("");

const showHideNav =()=>{
if(show==="toggle"){
  setShow("")
}else{
  setShow("toggle")
}
if(navActive==="nav-active"){
  setNavActive("")
}else{
  setNavActive("nav-active")
}

}


    return (
        
    <nav>
      <Link to={process.env.PUBLIC_URL + "/"} onClick={()=>{setNavActive("");setShow();}}>
          <li id="logo">HD</li>
        </Link> 
      <ul className={`${navActive}`}>
        
      <Link to={process.env.PUBLIC_URL + "/"} onClick={()=>{setNavActive("");setShow();}}>
          <li>Home</li>
        </Link>
        <Link to="/Skills" onClick={()=>{setNavActive("");setShow();}}>
          <li>Skills</li>
        </Link>
        <Link to="/Projects" onClick={()=>{setNavActive("");setShow();}}>
          <li>Projects</li>
        </Link>
        <Link to="/Contact" onClick={()=>{setNavActive("");setShow();}}>
          <li>Contact</li>
        </Link>
         
 
      </ul>
           <div className={`burger ${show}`} onClick={()=>showHideNav()}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>
    </nav>
        
    )
}

export default Navbar

