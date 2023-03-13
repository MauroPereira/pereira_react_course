import "./DolarsiApi.scss";
import { useState } from "react";
import { useEffect } from "react";

const DolarsiApi = () => {
  const [dolarPrice, setDolarPrice] = useState(0);
  const [loadingMsg, setLoadingMsg] = useState(true); // Primero False para no mostrar el mensaje de Loading

  useEffect(() => {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((resp) => resp.json())
      .then((data) => {
        setDolarPrice(data[0].casa.venta.replace(",", "."));
      })
      .finally(() => {
        setLoadingMsg(false); // para asegurarse que no se muestre el mensaje de Loading
      });
  }, []);

  return (
    <div className="dolar_container">
      <h2>Precio del dolar hoy</h2>
      <hr />
      {loadingMsg ? (
        <h4>
          Obteniendo cotización de https://www.dolarsi.com/... Espere por favor
        </h4>
      ) : (
        <h4>${dolarPrice}</h4>
      )}
    </div>
  );
};

export default DolarsiApi;
