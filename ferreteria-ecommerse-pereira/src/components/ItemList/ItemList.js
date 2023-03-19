import { Item } from "../Item/Item";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const ItemList = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </Grid>
  );
};
