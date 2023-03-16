import React from "react";
import { FaWhatsapp, FaEnvelope ,FaPhoneAlt,FaHome,FaInfo,FaInfoCircle} from "react-icons/fa";
import '../css/contact.css'
const Contact = () => {
  return (
      <div id="contact">
        <h2 className="italics">Contact us</h2>
        <p className="heading">
          Home<span>//Contact</span>
        </p>
        <div className="form">
          <form action="" method="post">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" placeholder="Enter Message"></textarea>
            <button className="btn">submit</button>
          </form>
          <div className="intouch">
            <h3>get in touch with us</h3>
            <div className="infos">
              <a href="">
                <FaEnvelope />
              </a>
              <a href="mailto:muhabdulsalam@gmail.com" className="a">
                muhabdulsalam @gmail.com
              </a>
            </div>
            <div className="infos">
              <a href="">
                <FaPhoneAlt />
              </a>
              <a href="tel:+2348096515524" className="a">
                (+234)809-651-5524
              </a>
            </div>
            <div className="infos">
              <a href="">
                <FaHome />
              </a>

              <a href="tel:+2348096515524" className="a">
                banex complex,wuse 2 - abuja
              </a>
            </div>
            <div className="infos">
              <a href="">
                <FaInfoCircle />
              </a>
              <a href="tel:+2348096515524" className="a">
                Monday – Friday 9 AM – 8 PM
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;

{
  /* <section className="form">
				<form action="https://formsubmit.co/f4450ac94b7a7f71bbc1a79f40ce3f98" method="POST">
					<h3>Send me a message</h3>
					<div className="info">
						<div className="contactName">
							<input type="text" name="name" placeholder="Name" />
						</div>
						<div className="contactEmail">
							<input type="email" name="email" placeholder="Email"  />
						</div>
						<div className="contactEmail">
							<input type="text" name="subject" placeholder="Subject" />
						</div>
						<div className="contactMSG">
							<textarea name="message" placeholder="Message" ></textarea>
						</div>
						<input type="hidden" name="_next" value="https://ibroport.netlify.app/" />
					</div>
					<button type="submit" className="contactBtn">
						Send
					</button>
				</form>
			</section> */
}
