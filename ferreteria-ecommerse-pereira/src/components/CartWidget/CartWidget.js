import "./CartWidget.scss";
import iconCarrito from "./changuito.png";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const productsQuantity = (cart) => {
  return cart.reduce((acc, prod) => acc + prod.quantity, 0);
};

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartwidget__container">
      <Link to="/cart" className="navbar__link">
        <Button className="volver__btn" variant="contained">
          <img src={iconCarrito} alt="changuito" />
          <div className="number__container">
            <label className="numbercontainer__number">
              {productsQuantity(cart)}
            </label>
          </div>
        </Button>
      </Link>
    </div>
  );
};
