import { createContext, useEffect, useState } from "react";
import { addToCart } from "../components/AddToCart/AddToCart";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cartLS")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  const eraseCart = () => {
    setCart([]);
  };

  const eraseItemFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartLS", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        totalPrice,
        eraseCart,
        eraseItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
