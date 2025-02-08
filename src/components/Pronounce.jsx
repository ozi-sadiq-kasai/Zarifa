import styled from 'styled-components';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pronounce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{margin: '-50px'} );

  return (
    <Wrapper
      ref={ref}
      variants={wrapperVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}>
      <motion.p variants={textVariants}>Let the Earth Move you.</motion.p>
      <motion.h2 variants={textVariants}>Zarifa</motion.h2>
      <motion.p variants={textVariants}>(pronounced zah-ree-fah)</motion.p>
      <Info variants={textVariants}>
        Zarifa is more than a clothing brand—it&apos;s a movement. Rooted in
        purpose, we are committed to empowering Indigenous communities by
        weaving impact into every thread. A portion of our proceeds supports
        initiatives that foster health, wealth, and sustainability.
      </Info>
    </Wrapper>
  );
};

// Animation variants
const wrapperVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 2,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};



// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

const Wrapper = styled(motion.div)`
  padding: 0 5rem;
  background-color: white;
  @media ${({ theme }) => theme.device.max.mobile} {
    padding: 0 1rem;
  }
`;
const Info = styled(motion.p)`
  max-width: 65%;
  margin-bottom: 0;
  padding-bottom: 0.8rem;
  @media ${({ theme }) => theme.device.max.mobile} {
    max-width: 100%;
    text-align: center;
  }
`;
export default Pronounce;
