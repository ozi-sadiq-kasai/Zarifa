import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { BsMinecart } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'motion/react';

// Data structures for dynamic rendering
const navLinks = [
  { to: '/', text: 'Home' },
  { to: 'about', text: 'About Us' },
  { to: 'shop', text: 'Shop' },
  { to: 'contact', text: 'Contact' },
  { to: 'find', text: 'Find Zarifa' },
];

const iconLinks = [
  { Icon: CiSearch, to: '#', size: 24 },
  { Icon: CgProfile, to: '#', size: 24 },
  { Icon: BsMinecart, to: '#', size: 24 },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <>
      <Nav>
        <Content>
          <Menu>
            <RxHamburgerMenu onClick={handleMenu} />
          </Menu>
          <NavList>
            {navLinks.map(({ to, text }) => (
              <li key={to}>
                <Link to={to}>{text}</Link>
              </li>
            ))}
          </NavList>
          <Title>Zarifa</Title>
          <IconWrapper>
            {iconLinks.map(({ Icon, to, size }) => (
              <Link key={Icon} to={to}>
                <Icon size={size} />
              </Link>
            ))}
          </IconWrapper>
        </Content>
      </Nav>

      {/* Sidebar */}
      <Sidebar showMenu={showMenu}>
        <motion.div
          onClick={handleMenu}
          initial={{ rotate: 0 }}
          // animate={{ rotate: showMenu ? 360 : 0 }}
          animate={{ rotate:  360 }}
          // transition={{ duration: 0.3, ease: 'easeInOut' }}
          // whileHover={{ scale: 1.2, rotate: 90 }}
           style={{
             cursor: 'pointer',
            position: 'absolute',
            top: '1rem',
            right: '1rem',
         }}
          >
          <IoIosClose size={30} />
        </motion.div>
        <SidebarContent>
          {navLinks.map(({ to, text }) => (
            <SidebarLink key={to} to={to}>
              {text}
            </SidebarLink>
          ))}
        </SidebarContent>
      </Sidebar>

      {/* <Overlay/>*/}
      {showMenu && <Overlay onClick={handleMenu} />}
    </>
  );
};

//Styled Components
const Nav = styled.nav`
  background-color: white;
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 1000;
`;

const Menu = styled(Link)`
  @media ${({ theme }) => theme.device.min.tablet} {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  flex: 2;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.range.small} {
    display: none;
  }
  li {
    position: relative;
    padding: 5px 0;
    display: block;

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
      color: var(--grey-600);
    }
  }
`;

const Title = styled.h1`
  flex: 1.7;
  text-align: center;
  padding: 1rem 0;
`;

const IconWrapper = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: space-evenly;
  a {
    color: var(--grey-400);
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ showMenu }) => (showMenu ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background-color: white;
  z-index: 1001;
  transition: left 0.7s ease-out;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarLink = styled(Link)`
  color: var(--grey-600);
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: black;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default Navbar;
