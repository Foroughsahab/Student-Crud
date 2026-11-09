
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-badge">
          {product.badge}
        </span>
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        <div className="product-rating">
          ★ {product.rating}
        </div>

        <div className="product-price">
          <strong>${product.price}</strong>
          <del>${product.oldPrice}</del>
        </div>

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
