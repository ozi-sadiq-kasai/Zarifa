import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women%27s%20clothing")
      .then((response) => {
        setItems(response.data);
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
    <div style={{paddingTop: '10rem',backgroundColor:'red'}}>
      {items.map((item) => (
        <div key={item.id}>
            <img
            src={item.image}
            alt={item.title}
            style={{ width: '150px', height: 'auto' ,marginTop:'1.2rem'}}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;
