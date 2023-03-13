import "./Item.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Grid className="product_item" item xs={3}>
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p className="itemDescription">{item.description}</p>
      <p>
        Precio: <strong>${item.price}</strong>
      </p>
      <p>Cantidad: {item.stock}</p>
      <Button variant="contained">
        <Link to={`/detail/${item.id}`} type="submit" variant="contained">
          Ver más
        </Link>
      </Button>
    </Grid>
  );
};

export default Item;
