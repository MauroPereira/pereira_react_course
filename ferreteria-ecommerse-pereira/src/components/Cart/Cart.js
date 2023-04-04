import "./Cart.scss";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={prod.name} src={prod.img} />
            </ListItemAvatar>
            <ListItemText
              className="list_item_text"
              primary={prod.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Precio por unidad: ${prod.price}
                  </Typography>
                  <p>Cantidad: {prod.quantity} </p>
                  Subtotal: ${(prod.price * prod.quantity).toFixed(3)}
                </React.Fragment>
              }
            />
            <IconButton
              edge="center"
              onClick={() => eraseItemFromCart(prod.id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
      <h3>Total: $ {totalPrice().toFixed(3)}</h3>

      <Button
        className="volver__btn"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleReturn}
      >
        Volver
      </Button>

      <Button
        className="borrar_carrito__btn"
        variant="contained"
        startIcon={<RemoveShoppingCartIcon />}
        color="error"
        onClick={eraseCart}
      >
        Borrar carrito
      </Button>
    </div>
  );
};
