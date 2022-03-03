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
      <Link to={process.env.PUBLIC_URL + "/"} onClick={()=>setNavActive("")}>
          <li id="logo">HD</li>
        </Link> 
      <ul className={`${navActive}`}>
        
      <Link to={process.env.PUBLIC_URL + "/"} onClick={()=>setNavActive("")}>
          <li>Home</li>
        </Link>
        <Link to="/Skills" onClick={()=>setNavActive("")}>
          <li>Skills</li>
        </Link>
        <Link to="/Projects" onClick={()=>setNavActive("")}>
          <li>Projects</li>
        </Link>
        <Link to="/Contact" onClick={()=>setNavActive("")}>
          <li>Contact</li>
        </Link>
         
 
      </ul>
           <div class={`burger ${show}`} onClick={()=>showHideNav()}>
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
</div>
    </nav>
        
    )
}

export default Navbar

