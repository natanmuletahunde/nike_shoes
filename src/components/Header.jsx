import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nike Shoes</h1> {/* Adjusted text size */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-lg transition ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-gray-800'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/shop" 
                className={({ isActive }) => 
                  `text-lg transition ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-gray-800'}`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-lg transition ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-gray-800'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-lg transition ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-gray-800'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
