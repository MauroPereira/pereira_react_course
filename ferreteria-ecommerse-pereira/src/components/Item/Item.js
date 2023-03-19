import "./Item.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Item = ({ item }) => {
  return (
    <Paper className="paper_item" elevation={6}>
      <Box className="box_item">
        <img src={item.img} alt={item.name} />
        <h4>{item.name}</h4>
        <p className="itemDescription">{item.description}</p>
        <p>
          Precio: <strong>${item.price}</strong>
        </p>
        <p>Cantidad: {item.stock}</p>
        <div className="button__container">
          <Button variant="contained">
            <Link to={`/detail/${item.id}`} style={{ textDecoration: "none" }}>
              Ver más
            </Link>
          </Button>
        </div>
      </Box>
    </Paper>
  );
};
