
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cartItems.length === 0) return;

    alert(`Thank you, ${formData.name}! Your order has been placed.`);

    clearCart();
    setFormData({
      name: "",
      email: "",
      address: "",
    });
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>No items to checkout.</h2>
        <Link to="/products" className="hero-button">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <section className="checkout-page">
      <div className="page-heading">
        <span className="section-label">ALMOST THERE</span>
        <h1>Checkout</h1>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Delivery Address</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="checkout-total">
          Total: ${cartTotal.toFixed(2)}
        </div>

        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default Checkout;
