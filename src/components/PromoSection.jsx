import { Link } from 'react-router-dom';

const PromoSection = () => {
  return (
    <div className="p-8 space-y-16"> {/* Wrapper for spacing between sections */}
      {/* First Section */}
      <section 
        className="bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col justify-between p-8 rounded-lg"
        style={{ backgroundImage: "url('https://media.gq.com/photos/63eba1b2275d2fef78a425c2/master/pass/nike-running-shoes-streakfly-invincible.jpg')" }}
      >
          {/* First Promo Section */}
          <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center mb-8 w-full">
          <h1 className="text-6xl font-bold mb-6 text-white">Nike Shoes Promotion</h1>
          <p className="text-xl mb-6 text-white">
            Experience the latest collection of Nike shoes designed for athletes and casual wear.
          </p>
          <Link to="/shop">
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-3 gap-x-6 mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg"
            alt="Nike Shoe 1"
            className="w-full h-full object-cover rounded-lg" // Ensure full visibility of images
          />
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg"
            alt="Nike Shoe 2"
            className="w-full h-full object-cover rounded-lg" // Ensure full visibility of images
          />
          <img
            src="https://t4.ftcdn.net/jpg/03/91/45/63/360_F_391456310_iYbpTyVcCgjhbcnCBn3Nb2veidPKyEfX.jpg"
            alt="Nike Shoe 3"
            className="w-full h-full object-cover rounded-lg" // Ensure full visibility of images
          />
        </div>
      </section>

      {/* Second Section */}
      <section 
        className="bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col justify-center p-8 rounded-lg"
        style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/91/45/63/360_F_391456310_iYbpTyVcCgjhbcnCBn3Nb2veidPKyEfX.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center w-full">
          <h2 className="text-5xl font-bold mb-6 text-white">Discover More Nike Products</h2>
          <p className="text-xl mb-6 text-white">
            Explore a wider range of Nike shoes and gear, designed for performance and style.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300">
            Explore More
          </button>
        </div>
      </section>

      {/* Third Section */}
      <section 
        className="bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col justify-center p-8 rounded-lg"
        style={{ backgroundImage: "url('https://blog.atome.sg/wp-content/uploads/2022/04/Nike-running-shoes.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center w-full">
          <h2 className="text-5xl font-bold mb-6 text-white">Find Your Perfect Running Shoe</h2>
          <p className="text-xl mb-6 text-white">
            Explore a wider range of Nike shoes and gear, designed for performance and style.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300">
            Explore More
          </button>
        </div>
      </section>

      {/* Promotional Content Section */}
      <section className="bg-white p-8 rounded-lg">
  <div className="max-w-7xl mx-auto flex gap-8">
    {/* First Promo Content */}
    <div className="flex-1 mb-12">
      <h2 className="text-4xl font-bold mb-4">Nike. Just Do It</h2>
      <p className="text-xl mb-4">
        Flexible Training Plans Tailored to You
      </p>
      <p className="text-lg mb-6">
        With NTC, you get access to over 190 free workouts across strength, endurance, yoga and mobility.
      </p>
      <div className="flex space-x-4">
        <a 
          href="https://apps.apple.com/us/app/nike-training-club/id301521403" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download iOS
        </a>
        <a 
          href="https://play.google.com/store/apps/details?id=com.nike.ntc" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Android
        </a>
      </div>
    </div>
    
    {/* Second Promo Content */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4">Nike. Just Do It</h2>
      <p className="text-xl mb-4">
        For Every Run
      </p>
      <p className="text-lg mb-6">
        The Nike Run Club gives you the guidance, inspiration and innovation you need to become a better athlete. Join us to reach your goals and have fun along the way.
      </p>
      <div className="flex space-x-4">
        <a 
          href="https://apps.apple.com/us/app/nike-run-club/id387771637" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download iOS
        </a>
        <a 
          href="https://play.google.com/store/apps/details?id=com.nike.runclub" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Android
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default PromoSection;
