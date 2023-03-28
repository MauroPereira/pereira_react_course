import "./ItemCount.scss";
import Button from "@mui/material/Button";
import { useState } from "react";

export const ItemCount = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => setQuantity(quantity + 1);

  const handleSubtract = () => {
    quantity > 1 && setQuantity(quantity - 1);
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
    </div>
  );
};
