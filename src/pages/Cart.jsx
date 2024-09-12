import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <img src={item.src} alt={item.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-lg">Price: ${item.price}</p>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
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
