import { footerLogo, sicon1, sicon2, sicon3, sicon4, sendimg } from '../imex';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footerFrame1">
          <h1>Pellentesque suscipit<br/> fringilla libero eu.</h1>
          <button>Get a Demo</button>
        </div>
        <div className="footerFrame2">
          <div className="ff1">
            <img src={footerLogo} alt="Company Logo" />
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
            <div className="sicon">
              <img src={sicon1} alt="Social Media Logo" />
              <img src={sicon2} alt="Social Media Logo" />
              <img src={sicon3} alt="Social Media Logo" />
              <img src={sicon4} alt="Social Media Logo" />
            </div>
          </div>
          <div className="ff2">
            <div className="cpy">
              <h1>Company</h1>
              <h5>About us</h5>
              <h5>Blog</h5>
              <h5>Contact us</h5>
              <h5>Pricing</h5>
              <h5>Testimonials</h5>
            </div>
            <div className="spt">
              <h1>Support</h1>
              <h5>Help center</h5>
              <h5>Terms of Service</h5>
              <h5>Legal</h5>
              <h5>Privacy policy</h5>
              <h5>Status</h5>
            </div>
            <div className="sud">
              <h1>Stay up to date</h1>
              <div className="rbtn">
                <input type="email" placeholder="Your email address" />
                <button><img src={sendimg} alt="Send" /></button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
