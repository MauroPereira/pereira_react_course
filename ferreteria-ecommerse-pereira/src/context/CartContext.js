import { createContext, useState } from "react";
import { addToCart } from "../components/AddToCart/AddToCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  const eraseCart = () => {
    setCart([]);
  };

  const eraseItemFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

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
