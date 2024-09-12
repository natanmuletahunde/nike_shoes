/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Shop = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buttonStates, setButtonStates] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/images')
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setButtonStates(prevState => ({
      ...prevState,
      [item.id]: 'added',
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images</div>;

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Shop Nike Shoes</h2>
      <p className="text-lg text-center mb-8">
        Browse through our latest collection of Nike shoes designed for athletes and casual wear.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {images.map(image => (
          <div key={image.id} className="border shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center">{image.title}</h3>
            <p className="text-lg text-center">${image.price}</p>

            <button
              onClick={() => handleAddToCart(image)}
              className={`px-4 py-2 mt-4 rounded transition ${
                buttonStates[image.id] === 'added'
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {buttonStates[image.id] === 'added' ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
