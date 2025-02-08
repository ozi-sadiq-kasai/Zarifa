import styled from 'styled-components';
import {
  PiRecycleThin,
  PiHandshakeThin,
  PiPersonSimpleRunLight,
} from 'react-icons/pi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GiUbisoftSun } from 'react-icons/gi';
import { motion } from "framer-motion";

const FiveKeys = () => {
  const items = [
    { text: 'Eco-Friendly', icon: <PiRecycleThin size={20} /> },
    { text: 'Ethically Made', icon: <PiHandshakeThin size={20} /> },
    { text: 'Toxin-Free', icon: <MdOutlineWaterDrop size={20} /> },
    { text: 'Quality Fabric', icon: <PiPersonSimpleRunLight size={20} /> },
    { text: 'Comfort', icon: <GiUbisoftSun size={20} /> },
  ];


  return (
    <Wrapper
    variants={containerVariants} // Add container variants
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <List key={index}
        variants={itemVariants}
        >
          <Text>{item.text}</Text>
          <span>{item.icon}</span>
        </List>
      ))}
    </Wrapper>
  );
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
};

const Wrapper = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  background-color: white;
  padding: 1rem 0;
  @media ${({ theme }) => theme.device.max.mobile} {
    display:grid;
    grid-template-columns: repeat(3,auto);
    gap:1rem;
    justify-content:center;
    aligh-items:center;
  }
`;

const List = styled(motion.li)`
  position: relative;
  border: 1px solid var(--grey-400);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  span {
    position: absolute;
    bottom: -0.4rem;
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  position: absolute;
  font-size: 0.7rem;
  font-weight: bold;
`;

export default FiveKeys;
