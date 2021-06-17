

const Contact = (props) => {
  return (
    <div class="contactContainer">
        <img src={props.image} alt="konigSea"/>
      <h1>Contact me</h1>
      <div className="envelope">
        <div class="envelope-cap"></div>
        <div class="latter-form">
          <form >
              <h2>Send Message</h2>
              <div class="inputBox"><input type="text"  required="required"/>
              <span>Full Name</span></div>
              <div class="inputBox"><input type="text" required="required"/>
              <span>Email</span></div>
              <div class="inputBox"><textarea required="required"></textarea>
              <span>Type your Message...</span></div>
              <div class="inputBox"><input type="submit" value="Send" /></div>
           
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
