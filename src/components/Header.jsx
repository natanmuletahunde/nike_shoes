const Header = () => {
    return (
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Nike Shoes</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Shop</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  