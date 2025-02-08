import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

const Sliders = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://fakestoreapi.com/products/category/women%27s%20clothing?limit=5'
      )
      .then((response) => {
        setSliders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  return (
    <Wrapper>
      {sliders.map((product) => (
        <Content key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '150px', height: 'auto' }}
          />
          <p>Add To Cart</p>
          <InfoWrapper>
            <Paragraph>
              {product.title}
              <span>${product.price}</span>
            </Paragraph>
          </InfoWrapper>
        </Content>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 1rem;
  @media ${({ theme }) => theme.device.max.mobile} {
    width:70%;
    flex-direction:column;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  border: 1px solid var(--grey-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  p {
    display: none;
  }
  img:hover {
    scale: 1.1;
    transition: ease-in;
    cursor: pointer;
    p {
      display: block;
    }
  }
`;

const InfoWrapper = styled.div`
  margin: 1rem auto 0 auto;
  width: 80%;
`;
const Paragraph = styled.div`
  font-size: 12px;
  width: 100%;
  text-align: center;
  span {
    display: block;
    text-align: center;
    font-size: 1rem;
  }
`;

export default Sliders;
