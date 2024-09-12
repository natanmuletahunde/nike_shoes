const PromoSection = () => {
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl font-bold mb-4">Unleash Your Potential</h2>
            <p className="text-lg mb-8">
              Step into the future with Nike’s latest collection of high-performance shoes. Engineered for athletes, designed for everyone.
            </p>
            <a href="#" className="bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-gray-300">Shop Now</a>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img src="/assets/nike-shoes.jpg" alt="Nike Shoes" className="w-full rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>
    );
  }
  
  export default PromoSection;
  