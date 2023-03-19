import "./ItemList.scss";
import { Item } from "../Item/Item";
import Grid from "@mui/material/Grid";

export const ItemList = ({ items }) => {
  return (
    <Grid className="grid__container" container spacing={4}>
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </Grid>
  );
};
