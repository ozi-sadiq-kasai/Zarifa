import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { BsMinecart } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Nav>
      <Content>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About Us</Link>
          </li>
          <li>
            <Link to='shop'>Shop</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
          <li>
            <Link to='find'>Find Zarifa</Link>
          </li>
        </ul>
        <h1>Zarifa</h1>
        <div>
          <Link>
            <CiSearch size={24}/>
          </Link>
          <Link>
            <CgProfile size={24}/>
          </Link>
          <Link>
            <BsMinecart size={24}/>
          </Link>
        </div>
      </Content>
    </Nav>
  );
};

const Nav = styled.nav`
  border: 1px solid red;
  padding: 0 2rem;
  position:fixed;
  width:100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 1rem;

  ul {
    display: flex;
    flex: 2;
    justify-content: space-between;

    li {
      position: relative;
      padding: 5px 0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 1px;
        background: black;
        transition: all 0.3s ease-in-out;
        transform: translateX(-50%);
      }

      &:hover::after {
        width: 100%;
      }

      a {
        position: relative;
        z-index: 1;
        color:var(--grey-600)
      }
    }
  }

  div {
    flex: 1.2;
    display: flex;
    justify-content: space-evenly;
    a{
        color:var(--grey-400)
    }
  }

  h1 {
    flex: 1.7;
    text-align: center;
    padding: 1rem 0;
  }
`;
export default Navbar;
