
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price}</p>

        <div className="quantity-control">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-actions">
        <strong>${item.price * item.quantity}</strong>

        <button
          className="remove-button"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
