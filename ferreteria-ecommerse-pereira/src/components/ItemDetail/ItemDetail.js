import "./ItemDetail.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="item_detail">
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>
        Precio: <strong>${item.price}</strong>
      </p>
      <p>Cantidad: {item.stock}</p>
      <Button variant="contained" onClick={handleReturn}>
        Volver
      </Button>
    </div>
  );
};

export default ItemDetail;
