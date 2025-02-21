import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Shop = () => {
  const [womenItems, setWomenItems] = useState([]);
  const [menItems, setMenItems] = useState([]);
  const [jewelleryItems, setJewelleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women%27s%20clothing")
      .then((response) => {
        setWomenItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((response) => {
        setMenItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setJewelleryItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  return (
    <div style={{ paddingTop: "8rem" }}>
      <Section>
        <h2>Women's Items</h2>
        {womenItems.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} alt={item.title} />
            <Overlay>
              <span>Add</span>
              <span>Details</span>
            </Overlay>
          </Card>
        ))}
      </Section>
      <Section>
        <h2>Men's Items</h2>
        {menItems.map((item) => (
          <Card key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "auto", marginTop: "1.2rem" }}
            />
            <Overlay>
              <span>Add</span>
              <span>Details</span>
            </Overlay>
          </Card>
        ))}
      </Section>
      <Section>
        <h2>Jewellery</h2>
        {jewelleryItems.map((item) => (
          <Card key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "auto", marginTop: "1.2rem" }}
            />
            <Overlay>
              <span>Add</span>
              <span>Details</span>
            </Overlay>
          </Card>
        ))}
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  display: inline-block;
  margin: 1rem;

  &:hover div {
    display: flex;
  }
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  margin-top: 1.2rem;
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Shop;
