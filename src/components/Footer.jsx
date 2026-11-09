
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>NOVA<span>.</span></h2>

          <p>
            Discover the future of technology.
            Premium products for people who think beyond ordinary.
          </p>

          <span className="footer-tagline">
            THINK FUTURE. LIVE NOVA.
          </span>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/cart">Shopping Bag</Link>
        </div>

        <div className="footer-column">
          <h3>Our Store</h3>
          <span>Premium Technology</span>
          <span>Modern Collection</span>
          <span>Unique Experience</span>
        </div>

        <div className="footer-column">
          <h3>Discover NOVA</h3>
          <span>Innovation</span>
          <span>Technology</span>
          <span>Future Lifestyle</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NOVA STORE. All rights reserved.</p>
        <span>DESIGNED FOR THE FUTURE ✦</span>
      </div>
    </footer>
  );
}

export default Footer;
