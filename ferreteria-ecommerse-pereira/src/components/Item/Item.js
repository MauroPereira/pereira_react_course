import "./Item.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Item = ({ item }) => {
  return (
    <div>
      <Grid item xs={12}>
        <img src={item.img} alt={item.name} />
        <h4>{item.name}</h4>
        <p className="itemDescription">{item.description}</p>
        <p>
          Precio: <strong>${item.price}</strong>
        </p>
        <p>Cantidad: {item.stock}</p>
        <Button type="submit" variant="contained">
          Agregar al Carrito de compras
        </Button>
      </Grid>
    </div>
  );
};

export default Item;
