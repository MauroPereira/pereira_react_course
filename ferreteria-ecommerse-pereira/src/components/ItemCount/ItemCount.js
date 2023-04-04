import "./ItemCount.scss";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ItemCount = ({ item, quantity, setQuantity, handleAddToCart }) => {
  const handleAdd = () => {
    quantity < item.stock && setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  // Aplicación de técnica de renderizado
  item.stock === 0 && setQuantity(0);

  return (
    <div className="quantity__container">
      <Button
        variant="contained"
        disabled={item.stock === 0}
        onClick={handleAdd}
      >
        +
      </Button>
      <p>Cantidad: {quantity}</p>
      <Button
        variant="contained"
        disabled={item.stock === 0}
        onClick={handleSubtract}
      >
        -
      </Button>
      <Button
        className="agregar_carrito__btn"
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        color="success"
        onClick={handleAddToCart}
        disabled={item.stock === 0}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
