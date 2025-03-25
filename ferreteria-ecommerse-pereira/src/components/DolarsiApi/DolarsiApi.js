import "./DolarsiApi.scss";
import { useState } from "react";
import { useEffect } from "react";

const DolarsiApi = () => {
  const [dolarPrice, setDolarPrice] = useState(0);
  const [loadingMsg, setLoadingMsg] = useState(true);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then((resp) => resp.json())
      .then((data) => {
        // Obtenemos el precio del dólar oficial
        setDolarPrice(data.oficialvalue_avg);
      })
      .catch((error) => {
        console.error("Error al obtener el precio del dólar:", error);
        setDolarPrice("Error al cargar");
      })
      .finally(() => {
        setLoadingMsg(false);
      });
  }, []);

  return (
    <div className="dolar_container">
      <h2>Precio del dolar oficial hoy</h2>
      <hr />
      {loadingMsg ? (
        <h4>
          Obteniendo cotización... Espere por favor
        </h4>
      ) : (
        <h4>${dolarPrice}</h4>
      )}
    </div>
  );
};

export default DolarsiApi;
