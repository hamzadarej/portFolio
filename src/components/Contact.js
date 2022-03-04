import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const [state, handleSubmit] = useForm("xleavopp");
  if (state.succeeded) {
    return (
      <div className="contactContainer">
        <h2 style={{ color: "white", paddingTop: "15px" }}>
          Thanks for joining!
        </h2>
      </div>
    );
  }
  return (
    <div className="contactContainer">
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

        <div className="latter-form">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" className="input" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input id="email" type="email" className="input"  name="email" required="required" />
              <span>Email</span>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="inputBox">
              <textarea
                required="required"
                id="message"
                name="message"
                className="input" 
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" className="input"  value="Send" disabled={state.submitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
