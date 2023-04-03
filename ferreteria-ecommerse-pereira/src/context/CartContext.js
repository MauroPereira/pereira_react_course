import { createContext, useState } from "react";
import { addToCart } from "../components/AddToCart/AddToCart";

export const CartContext = createContext();

export const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}> 
            {children}
        </CartContext.Provider>
    )
}
