import "./ItemDetail.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="item_detail__container">
      <Paper className="paper_item" elevation={6}>
        <Box className="box_item">
          <img src={item.img} alt={item.name} />
          <h4 className="itemName">{item.name}</h4>
          <p className="itemDescription">{item.description}</p>
          <p className="itemPrice">
            Precio: <strong>${item.price}</strong>
          </p>
          <p className="itemQuantity">Cantidad: {item.stock}</p>
          <Button variant="contained" onClick={handleReturn}>
            Volver
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default ItemDetail;
