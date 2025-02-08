import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer style={{backgroundColor:'black'}}>
      <h2>Zarifa</h2>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <h3>Newsletter</h3>
          <p>Leave your email address to receive news and deals from Zarifa!</p>
          <div style={{display:'flex',flexDirection:'column'}}>
            <a href='#' type='text'>
              Name
            </a>
            <a href='#' type='email'>
              Email
            </a>
            <button href='#' type='submit'>
              Join
            </button>
          </div>
        </li>
        <li>
          <h3>Zarifa</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Our Press</li>
            <li>Contact us</li>
          </ul>
        </li>
        <li>
          <h3>Legal</h3>
          <ul>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Shippind Policy</li>
          </ul>
        </li>
        <li>
          <h3>Social</h3>
          <div>
            <span><LuFacebook/></span>
            <span><LuInstagram/></span>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
