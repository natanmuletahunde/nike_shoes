/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Ensure this URL matches your backend endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-600">Error: {error}</p>;

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Shop Nike Shoes</h2>
      <p className="text-lg text-center mb-8">
        Browse through our latest collection of Nike shoes designed for athletes and casual wear.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-xl text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
