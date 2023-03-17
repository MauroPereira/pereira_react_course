import "./Item.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ItemStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Item2 = ({ item }) => {
  <Grid xs={3}>
    <ItemStyled>
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p className="itemDescription">{item.description}</p>
      <p>
        Precio: <strong>${item.price}</strong>
      </p>
      <p>Cantidad: {item.stock}</p>
      <Button variant="contained">
        <Link to={`/detail/${item.id}`} style={{ textDecoration: "none" }}>
          Ver más
        </Link>
      </Button>
    </ItemStyled>
  </Grid>;
};

export const Item = ({ item }) => {
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
        <Link to={`/detail/${item.id}`} style={{ textDecoration: "none" }}>
          Ver más
        </Link>
      </Button>
    </Grid>
  );
};
