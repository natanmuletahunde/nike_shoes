const PromoSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat h-screen text-white flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: "url('https://media.gq.com/photos/63eba1b2275d2fef78a425c2/master/pass/nike-running-shoes-streakfly-invincible.jpg')" }}
    >
      {/* First Promo Section */}
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center mb-8 w-full">
        <h1 className="text-6xl font-bold mb-6">Nike Shoes Promotion</h1>
        <p className="text-xl mb-6">
          Experience the latest collection of Nike shoes designed for athletes and casual wear.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300">
          Shop Now
        </button>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-3 gap-x-6 mb-8">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg"
          alt="Nike Shoe 1"
          className="w-full rounded-lg"
        />
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/index-bomber-65a839208f31a.jpg"
          alt="Nike Shoe 2"
          className="w-full rounded-lg"
        />
        <img
          src="https://t4.ftcdn.net/jpg/03/91/45/63/360_F_391456310_iYbpTyVcCgjhbcnCBn3Nb2veidPKyEfX.jpg"
          alt="Nike Shoe 3"
          className="w-full rounded-lg"
        />
      </div>

      {/* Second Large Div at the Bottom */}
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center w-full">
        <h2 className="text-4xl font-bold mb-6">Discover More Nike Products</h2>
        <p className="text-xl mb-6">
          Explore a wider range of Nike shoes and gear, designed for performance and style.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default PromoSection;
