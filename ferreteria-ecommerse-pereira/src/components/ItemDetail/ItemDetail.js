import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
  return (
    <div className="item_detail">
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>
        Precio: <strong>${item.price}</strong>
      </p>
      <p>Cantidad: {item.stock}</p>
    </div>
  );
};

export default ItemDetail;
