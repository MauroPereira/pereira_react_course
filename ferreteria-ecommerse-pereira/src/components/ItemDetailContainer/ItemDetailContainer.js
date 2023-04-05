import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1 - Referencia (sync)
    const docRef = doc(db, "productos", itemId);

    // 2 - Pedido de referencia (async)
    getDoc(docRef)
      .then((doc) => setItem({ id: doc.id, ...doc.data() }))
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
