import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper >
      <h2>Zarifa</h2>
      <Content>
        <First>
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
        </First>
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
      </Content>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
 background-color:black;
`;
const Content = styled.ul`
display:flex;
justify-content:space-around;
`
const First = styled.li``
export default Footer;
