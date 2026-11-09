
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("nova-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function saveCart(updatedCart) {
    setCartItems(updatedCart);
    localStorage.setItem("nova-cart", JSON.stringify(updatedCart));
  }

  function addToCart(product) {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cartItems,
        { ...product, quantity: 1 },
      ];
    }

    saveCart(updatedCart);
  }

  function removeFromCart(productId) {
    const updatedCart = cartItems.filter(
      (item) => item.id !== productId
    );

    saveCart(updatedCart);
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity }
        : item
    );

    saveCart(updatedCart);
  }

  function clearCart() {
    saveCart([]);
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
