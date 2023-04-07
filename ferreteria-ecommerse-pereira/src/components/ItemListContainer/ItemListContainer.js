import "./ItemListContainer.scss";
import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const warningAlert = (title, msg) => {
  Swal.fire({
    title: title,
    text: msg,
    icon: "warning",
  });
};

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loadingMsg, setLoadingMsg] = useState(true); // Primero False para no mostrar el mensaje de Loading

  const { categoryId } = useParams();

  // Para que no se vuelva a cargar //////////
  useEffect(() => {
    setLoadingMsg(true); // asi muestra el cartel de cargando

    // 1 - Referencia (sync)
    const productsRef = collection(db, "productos");

    const productsQuery = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    // 2 - Pedido de referencia (async)
    getDocs(productsQuery)
      .then((resp) => {
        const docs = resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(docs);
      })
      .catch((error) => {
        warningAlert("Ha ocurrido un error!", error);
      })
      .finally(() => {
        setLoadingMsg(false); // para asegurarse que no se muestre el mensaje de Loading
      });
  }, [categoryId]); // cuando cambia el parametro categoryId se monta de nuevo
  ///////////////////////////////////////////

  return (
    <div className="itemlist__container">
      <h2 className="itemlist__title">{greeting}</h2>
      <hr />
      {loadingMsg ? (
        <h3>Cargando lista... Espere por favor</h3>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
