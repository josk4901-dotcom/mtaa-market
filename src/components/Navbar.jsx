import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-white border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-gray-900">
          Mtaa Market
        </Link>

        <div className="flex gap-6 items-center text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>

          <Link to="/cart" className="font-semibold">
            Cart ({cartCount})
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;