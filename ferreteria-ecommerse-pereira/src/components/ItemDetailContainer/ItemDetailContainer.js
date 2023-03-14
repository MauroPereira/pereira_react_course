import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { dataRequestforId } from "../../helpers/dataRequest";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    dataRequestforId(Number(itemId))
      .then((resp) => {
        setItem(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2> Detalle de producto</h2>
      <hr />
      {loading ? (
        <h3>Cargando... Por favor espere</h3>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
