/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend
    axios.get('http://localhost:5000/images')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Shop Nike Shoes</h2>
      <p className="text-lg text-center mb-8">
        Browse through our latest collection of Nike shoes designed for athletes and casual wear.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map(image => (
          <div key={image.id} className="border p-4 rounded-lg">
            <img src={image.src} alt={image.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold">{image.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
