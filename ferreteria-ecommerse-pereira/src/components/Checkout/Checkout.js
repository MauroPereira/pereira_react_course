import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  return (
    <div className="checkout__container">
      <h2>Checkout</h2>
      <hr />
      ////// Formulario /////////////////
      <Button
        className="volver__btn"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleReturn}
      >
        Volver
      </Button>
    </div>
  );
};
