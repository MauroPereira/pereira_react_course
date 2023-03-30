import { CartContext } from "../../context/CartContext"

const AddToCart = (item) => {
    setCart([..cart, item])
}