import Button from "@mui/material/Button";

const Item = ({ item }) => {
  return (
    <div className="col-3 m-1">
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>
        Precio: <strong>${item.price}</strong>
      </p>
      <p>Cantidad: {item.stock}</p>
      <Button type="submit" variant="contained">
        Agregar al Carrito de compras
      </Button>
    </div>
  );
};

export default Item;
