import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navBox">
    <h1>HAMZA DAREJ</h1>
    <h4>WEB DEVELOPER</h4>
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Skills">
          <li>Skills</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </div>
    
  );
};
export default Home;
