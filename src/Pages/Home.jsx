import { IoIosArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pronounce from '../components/Pronounce';
import FiveKeys from '../components/FiveKeys';

const Home = () => {
  const [headerImg, setHeaderImg] = useState();

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

  return (
    <>
      <Wrapper>
        <Info>
          <p>INTRODUCING ZARIFA</p>
          <h2>Zarifa means &apos;Elegant&apos; in Arabic Language.</h2>
          <p>sustainable clothing pieces helps protect our globe</p>
          <button className='btn'>
            SHOP NOW <IoIosArrowRoundForward />
          </button>
        </Info>
        <HeaderImg>
          {headerImg ? (
            <img src={headerImg} alt='img' className='img' />
          ) : (
            <p>Loading image...</p>
          )}
        </HeaderImg>
      </Wrapper>
      <Pronounce />
      <FiveKeys />
    </>
  );
};

const Wrapper = styled.div`
  padding: 8rem 3rem;
  background-color: White;
  display: flex;
  gap: 1rem;
  @media ${({ theme }) => theme.device.max.mobile} {
    flex-direction: column;
    padding: 8rem 1rem 1rem 1rem;
  }
`;

const Info = styled.div`
  flex: 2;
  button {
    padding: 0.75rem 1.6875rem;
    border-radius: 18px;
    @media ${({ theme }) => theme.device.max.mobile} {
    padding: 0.5rem  0.8rem;
  }
  }
`;
const HeaderImg = styled.div`
  flex: 1;
  img {
    width: 50%;
    margin: 0 auto;
  }
`;

export default Home;
