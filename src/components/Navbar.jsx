
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NOVA<span>.</span>
        <small>TECH STORE</small>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/products">
          Products
        </NavLink>
      </div>

      <div className="navbar-right">
        <span className="nav-status">
          <span></span> ONLINE STORE
        </span>

        <Link to="/cart" className="cart-link">
          <span>Bag</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
