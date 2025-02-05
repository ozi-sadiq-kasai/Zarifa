import { useEffect, useState } from "react";
import axios from "axios";

const Sliders = () => {
    const [sliders, setSliders] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/category/women\'s clothing?limit=5')
            .then((response) => {
                setSliders(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images</div>;

    return (
        <div className="slider-container" style={{backgroundColor:'white'}}>
            {sliders.map((product) => (
                <>
                <img 
                    key={product.id}
                    src={product.image}
                    alt={product.title}
                    className="slider-image"
                    style={{ width: "200px", height: "auto" }} // Add sizing for demo
                />
                <p>{product.price}</p>
                    </>
            ))}
        </div>
    );
};

export default Sliders;