import Item from "../Item/Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </Grid>
  );
};

export default ItemList;
