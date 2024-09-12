import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nike Shoes</h1> {/* Adjusted text size */}
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-lg hover:text-gray-700 transition">Home</Link></li> {/* Adjusted text size */}
            <li><Link to="/shop" className="text-lg hover:text-gray-700 transition">Shop</Link></li> {/* Adjusted text size */}
            <li><Link to="/about" className="text-lg hover:text-gray-700 transition">About</Link></li> {/* Adjusted text size */}
            <li><Link to="/contact" className="text-lg hover:text-gray-700 transition">Contact</Link></li> {/* Adjusted text size */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
