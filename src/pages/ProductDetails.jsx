
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="empty-message">Product not found.</h2>;
  }

  return (
    <section className="details-page">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">
        <span className="section-label">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <p className="product-rating">
          ★ {product.rating} / 5
        </p>

        <h2 className="details-price">
          ${product.price}
        </h2>

        <p>{product.description}</p>

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart +
        </button>

        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;
