import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Contact = (props) => {
  return (
    <div class="contactContainer">
      <img src={props.image} alt="konigSea" />
      <h1>Contact me</h1>
      <div className="contact-box">
        <div className="links-box">
          <div className="link">
            <i>
              <FontAwesomeIcon className="fa" icon={faMapMarker} />
            </i>
            <span className="from-info">SchönbachStraße 77 Leipzig 04299</span>
          </div>
          <div className="link">
            <i>
              <FontAwesomeIcon className="fa" icon={faPhone} />
            </i>
            <span className="from-info">Phone +4917666997546</span>
          </div>

          <div className="link">
            <i>
              <FontAwesomeIcon className="fa" icon={faEnvelope} />
            </i>
            <span className="from-info">darejhamza@gmail.com</span>
          </div>
        </div>

        <div class="latter-form">
          <form>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div class="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div class="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
