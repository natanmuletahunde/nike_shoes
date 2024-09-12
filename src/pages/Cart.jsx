/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="text-center text-2xl mt-10">Your cart is empty!</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Your Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cart.map(item => (
          <div key={item.id} className="border p-6 rounded-lg shadow-lg">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
            <p className="text-lg text-center">${item.price}</p>
            <button
              onClick={() => removeFromCart(item)}
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600 transition"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
