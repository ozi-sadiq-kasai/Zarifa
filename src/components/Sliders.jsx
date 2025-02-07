import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
          <div
            style={{
              margin: '0 auto',
              border: '1px solid yellow',
              width: '70%',
            }}>
            <p
              style={{
                width: '100%',
                textAlign: 'center',
                border: '1px solid black',
              }}>
              {product.title}
            </p>
            <p style={{ textAlign: 'center' }}>${product.price}</p>
          </div>
        </Content>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 1rem;
`;

const Content = styled.div`
  border: 1px solid var(--grey-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;
`;

export default Sliders;
