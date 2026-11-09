
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
   
<section className="nova-hero">
  <div className="nova-hero-bg">NOVA</div>

  <div className="nova-hero-content">
    <span className="nova-eyebrow">
      <span className="eyebrow-line"></span>
      PREMIUM TECHNOLOGY · 2026
    </span>

    <h1>
      SOUND
      <span>WITHOUT</span>
      <strong>LIMITS.</strong>
    </h1>

    <p>
      Discover the next level of sound.
      Experience premium technology,
      extraordinary design and pure innovation.
    </p>

    <div className="nova-hero-buttons">
      <Link to="/products" className="nova-primary-btn">
        Explore Collection <span>↗</span>
      </Link>

      <Link to="/products" className="nova-text-btn">
        Discover NOVA
      </Link>
    </div>

    <div className="nova-hero-bottom">
      <span>01 / PREMIUM AUDIO</span>
      <span>DESIGNED FOR THE FUTURE</span>
    </div>
  </div>

  <div className="nova-hero-product">
    <div className="product-light"></div>

    <img
      src="/nova-hero.jpg"
      alt="Premium NOVA wireless headphones"
      className="nova-headphones"
    />

    <div className="product-tag">
      <span className="tag-dot"></span>
      <div>
        <strong>PURE SOUND.</strong>
        <small>UNLIMITED EXPERIENCE.</small>
      </div>
    </div>

    <span className="product-number">N° 001</span>
  </div>

  <div className="nova-hero-accent"></div>
</section>


      <section className="products-section">
        <div className="section-heading">
          <div>
            <span className="section-label">
              ✦ CURATED FOR YOU
            </span>

            <h2>Featured Products<span>.</span></h2>

            <p>
              Explore our selection of exceptional technology.
            </p>
          </div>

          <Link to="/products" className="view-all-link">
            View All Products <span>↗</span>
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="collection-banner">
          <div>
            <span>DISCOVER SOMETHING NEW</span>
            <h2>Technology meets imagination.</h2>
          </div>

          <Link to="/products">
            Explore Now ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
