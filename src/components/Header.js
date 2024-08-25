import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";
export const Header = () => {
  const activehai = "text-2xl bg-gray-400";
  const activeno = "text-2xl";
  const { cartList } = useCart();

  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between  py-2 border-b-2 border-gray-500">
      <div className="logo-box">
        <Link to="/" className="flex gap-2 justify-center items-center">
          <img src={Logo} className="h-11" alt="logo of website" />
          <h1 className="text-2xl">Shopmate</h1>
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-6">
        <NavLink
          className={({ isActive }) => (isActive ? activehai : activeno)}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activehai : activeno)}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
      <div className="cart-box text-2xl">
        <Link to="/cart">Cart:{cartList.length}</Link>
      </div>
    </header>
  );
};
