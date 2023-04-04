import "./Cart.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";

export const Cart = () => {
  const { cart, totalPrice, eraseCart, eraseItemFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="cart__container">
      <h2>Carrito de compras</h2>
      <hr />
      {cart.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} alt={prod.name} />
          <big>Precio por unidad: ${prod.price}</big>
          <big>Cantidad: {prod.quantity}</big>
          <big>Subtotal: ${(prod.price * prod.quantity).toFixed(3)}</big>
          <Button
            className="volver__btn"
            variant="contained"
            onClick={() => eraseItemFromCart(prod.id)}
          >
            Eliminar producto
          </Button>
          <hr />
        </div>
      ))}
      <h3>Total: ${totalPrice().toFixed(3)}</h3>

      <Button className="volver__btn" variant="contained" onClick={eraseCart}>
        Borrar carrito
      </Button>

      <Button
        className="volver__btn"
        variant="contained"
        onClick={handleReturn}
      >
        Volver
      </Button>
    </div>
  );
};
