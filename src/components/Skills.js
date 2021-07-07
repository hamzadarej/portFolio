import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
const Skills = () => {
  return (
    <div className="boxContainer">
      <h2>Tools</h2>

      <div className="ICONS">
        <li>
          <FaHtml5 />{" "}
        </li>
        <li>
          <FaCss3 />
        </li>
        <li>
          <FaJsSquare />
        </li>
        <li>
          <FaBootstrap />
        </li>
        <li>
          <FaSass />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaNodeJs />
        </li>
      </div>
      <div className="containerS">
        <h2>CSS Skills Bar UI Design</h2>

        <div className="skills">
          <span className="Name">HTML</span>
          <div className="percent">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
          <div className="Value">85%</div>
        </div>
        <div className="skills">
          <span className="Name">CSS&SASS</span>
          <div className="percent">
            <div className="progress" style={{ width: "90%" }}></div>
          </div>
          <div className="Value">90%</div>
        </div>
        <div className="skills">
          <span className="Name">JAVASCRIPT</span>
          <div className="percent">
            <div className="progress" style={{ width: "79%" }}></div>
          </div>
          <div className="Value">78%</div>
        </div>
        <div className="skills">
          <span className="Name">React</span>
          <div className="percent">
            <div className="progress" style={{ width: "72%" }}></div>
          </div>
          <div className="Value">72%</div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
