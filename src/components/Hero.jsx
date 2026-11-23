import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gray-100 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Welcome to Soko Yetu
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 max-w-2xl">
          Discover quality products at affordable prices.
        </h1>

        <p className="text-gray-600 mt-5 max-w-xl">
          Shop your everyday essentials from one convenient marketplace.
        </p>

        <Link
          to="/products"
          className="inline-block bg-black text-white px-8 py-3 mt-8 rounded-md"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;