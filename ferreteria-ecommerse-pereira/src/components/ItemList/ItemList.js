import { Item, Item2 } from "../Item/Item";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const ItemList2 = ({ items }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {items.map((product) => (
          <Item2 key={product.id} item={product} />
        ))}
      </Grid>
    </Box>
  );
};

export const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </Grid>
  );
};
