/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Access cartItems and removeFromCart

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map(item => (
            <div key={item.id} className="border p-6 rounded-lg">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
              <p className="text-center">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-700"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
