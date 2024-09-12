const Footer = () => {
  return (
    <footer className="bg-white text-black p-8">
      <div className="max-w-7xl mx-auto flex justify-between gap-8">
        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#find-a-store" className="hover:text-gray-600">Find a Store</a></li>
            <li><a href="#help" className="hover:text-gray-600">Help</a></li>
            <li><a href="#returns" className="hover:text-gray-600">Returns</a></li>
            <li><a href="#contact-us" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about-nike" className="hover:text-gray-600">About Nike</a></li>
            <li><a href="#news" className="hover:text-gray-600">News</a></li>
            <li><a href="#careers" className="hover:text-gray-600">Careers</a></li>
            <li><a href="#investors" className="hover:text-gray-600">Investors</a></li>
            <li><a href="#sustainability" className="hover:text-gray-600">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Nike. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
