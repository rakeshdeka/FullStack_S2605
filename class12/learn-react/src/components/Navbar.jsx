import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white font-semibold w-full flex h-12 items-center justify-center gap-5">
      <Link className="hover:underline hover:text-gray-300 transition-colors " to="/">Home</Link>
      <Link className="hover:underline hover:text-gray-300 transition-colors " to="/about">About</Link>
      <Link className="hover:underline hover:text-gray-300 transition-colors " to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
