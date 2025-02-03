import styled from 'styled-components';
import { PiRecycleThin } from 'react-icons/pi';
import { PiHandshakeThin } from 'react-icons/pi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { PiPersonSimpleRunLight } from 'react-icons/pi';
import { GiUbisoftSun } from 'react-icons/gi';

const FiveKeys = () => {
  const tags = [
    'Eco-Friendly',
    'Ethically Made',
    'Toxin-Free',
    'High-Quality Fabric',
    'Effortless Comfort',
  ];
  
  const icons = [
    <PiRecycleThin key="recycle" size={20} />,
    <PiHandshakeThin key="handshake" size={20} />,
    <MdOutlineWaterDrop key="waterdrop" size={20} />,
    <PiPersonSimpleRunLight key="run" size={20} />,
    <GiUbisoftSun key="sun" size={20} />,
  ];

  return (
    <Wrapper>
      {/* <List>
        {tags.map((tag, index) => (
          <Text key={index}>
            {icons}
            {tag}
          </Text>
        ))}
      </List> */}
      <List>
        <Text>Eco-Friendly</Text>
        <span><PiRecycleThin key="recycle" size={20} /></span>
      </List>
      <List>
        <Text>Ethically Made</Text>
        <span><PiHandshakeThin key="recycle" size={20} /></span>
      </List>
      <List>
        <Text>Toxin-Free</Text>
        <span><MdOutlineWaterDrop key="recycle" size={20} /></span>
      </List>
      <List>
        <Text>Quality Fabric</Text>
        <span><PiPersonSimpleRunLight key="recycle" size={20} /></span>
      </List>
      <List>
        <Text>Comfort</Text>
        <span><GiUbisoftSun key="recycle" size={20} /></span>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex; 
  justify-content: space-around;
  gap:1rem; 
  position: relative;
  background-color:white;
  padding:1rem 0;
`;

const Text = styled.p`
  top: 1rem;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  font-weight: bold;
  position:absolute;
`;

const List = styled.li`
  position: relative;
  border: 1px solid var(--grey-400);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  span{
    position:absolute;
    top:2rem;
    left:1.5rem;
  }
`;

export default FiveKeys;
