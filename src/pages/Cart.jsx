
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, cartTotal } = useCart();

  return (
    <section className="cart-page">
      <div className="page-heading">
        <span className="section-label">YOUR SELECTION</span>
        <h1>Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Discover something amazing at NOVA.</p>
          <Link to="/products" className="hero-button">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <strong>Free</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${cartTotal.toFixed(2)}</strong>
            </div>

            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout →
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
