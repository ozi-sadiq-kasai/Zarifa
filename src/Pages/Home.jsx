import { IoIosArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Pronounce from '../components/Pronounce';
import FiveKeys from '../components/FiveKeys';
import Sliders from '../components/Sliders';
import { motion, useInView } from 'framer-motion';

const Home = () => {
  const [headerImg, setHeaderImg] = useState();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,margin: '-100px' });

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/15')
      .then((response) => {
        setHeaderImg(response.data.image);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

  // Animation variants
  const wrapperVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      // y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Wrapper
        ref={ref}
        variants={wrapperVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}>
        <Info variants={textVariants}>
          <motion.p variants={textVariants}>INTRODUCING ZARIFA</motion.p>
          <motion.h2 variants={textVariants}>
            Zarifa means &apos;Elegant&apos; in Arabic Language.
          </motion.h2>
          <motion.p variants={textVariants}>
            sustainable clothing pieces helps protect our globe
          </motion.p>
          <motion.button variants={textVariants} className='btn'>
            SHOP NOW <IoIosArrowRoundForward />
          </motion.button>
        </Info>
        <HeaderImg variants={imageVariants}>
          {headerImg && (
            <motion.img 
              src={headerImg} 
              alt='img' 
              className='img'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          )}
        </HeaderImg>
      </Wrapper>
      <Pronounce />
      <FiveKeys />
      <Sliders />
    </>
  );
};

const Wrapper =  styled(motion.div)`
  padding: 8rem 3rem;
  background-color: White;
  display: flex;
  gap: 1rem;

  .animate-target {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.5s ease-in-out;
  }

  .animate {
    opacity: 1;
    transform: translateX(10px);
  }
  @media ${({ theme }) => theme.device.max.mobile} {
    flex-direction: column;
    padding: 8rem 1rem 1rem 1rem;
  }
`;

const Info =  styled(motion.div)`
  flex: 2;
  button {
    padding: 0.75rem 1.6875rem;
    border-radius: 18px;
    @media ${({ theme }) => theme.device.max.mobile} {
      padding: 0.5rem 0.8rem;
    }
  }
`;
const HeaderImg =  styled(motion.div)`
  flex: 1;
  img {
    width: 50%;
    margin: 0 auto;
  }
`;

export default Home;
