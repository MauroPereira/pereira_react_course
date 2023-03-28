import "./ItemCount.scss";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ItemCount = ({ item, quantity, setQuantity }) => {
  const handleAdd = () => {
    quantity < item.stock && setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const itemAddToCart = {
      ...item,
      quantity,
    };
  };

  return (
    <div className="quantity__container">
      <Button variant="contained" onClick={handleAdd}>
        +
      </Button>
      <p>Cantidad: {quantity}</p>
      <Button variant="contained" onClick={handleSubtract}>
        -
      </Button>
      <Button
        className="agregar_carrito__btn"
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        color="success"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
