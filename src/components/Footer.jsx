const Footer = () => {
  return (
    <footer className="bg-white text-black p-8">
      <div className="max-w-7xl mx-auto flex justify-between gap-8">
        {/* Resources Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://www.nike.com/help" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Help</a></li>
            <li><a href="https://www.nike.com/returns" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Returns</a></li>
            <li><a href="https://www.nike.com/contact" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <li><a href="https://www.nike.com/find-a-store" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Find a Store</a></li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="https://www.nike.com/about" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">About Nike</a></li>
            <li><a href="https://news.nike.com/" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">News</a></li>
            <li><a href="https://jobs.nike.com/" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="https://investors.nike.com/" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Investors</a></li>
            <li><a href="https://www.nike.com/sustainability" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">Sustainability</a></li>
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
