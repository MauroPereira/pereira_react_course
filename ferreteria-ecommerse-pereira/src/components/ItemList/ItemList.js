import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row my-5">
      {items.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
