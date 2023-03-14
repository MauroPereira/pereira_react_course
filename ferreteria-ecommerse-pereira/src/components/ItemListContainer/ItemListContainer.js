import "./ItemListContainer.scss";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";
import { useEffect } from "react";
import { dataRequest } from "../../helpers/dataRequest";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loadingMsg, setLoadingMsg] = useState(true); // Primero False para no mostrar el mensaje de Loading

  const { categoryId } = useParams();

  // Para que no se vuelva a cargar //////////
  useEffect(() => {
    setLoadingMsg(true); // asi muestra el cartel de cargando

    dataRequest()
      .then((response) => {
        if (!categoryId) {
          setProducts(response);
        } else {
          setProducts(response.filter((prod) => prod.category === categoryId));
        }
      })
      .catch((error) => {
        console.log(error); // se imprime si ha ocurrido un error
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
