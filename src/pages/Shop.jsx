/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
