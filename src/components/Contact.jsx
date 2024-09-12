const Contact = () => {
    return (
      <div className="bg-gray-200 min-h-screen p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-lg text-center mb-8">
          Feel free to reach out to us with any questions or concerns.
        </p>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  