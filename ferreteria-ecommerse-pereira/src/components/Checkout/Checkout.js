import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputIcon from "@mui/icons-material/Input";
import { Formik } from "formik";

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="checkout__container">
      <h2>Checkout</h2>
      <hr />
      {/* ////// Formulario */}
      {/* <Formik
        initialValues={{
          nombres: "",
          apellido: "",
          direccion: "",
          email: "",
          telefono: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
         
        )}
      </Formik> */}
      {/* ///////////////// */}
      <div className="form__container">
        <form>
          <label>
            Nombres: <input type={"text"} placeholder="Tus nombres" required />{" "}
          </label>
          <br></br>
          <label>
            Apellidos:{" "}
            <input type={"text"} placeholder="Tus apellidos" required />
          </label>
          <br></br>
          <label>
            Dirección de entrega:{" "}
            <input type={"text"} placeholder="Tu dirección" required />
          </label>
          <br></br>
          <label>
            e-mail: <input type={"email"} placeholder="Tu email" required />
          </label>
          <br></br>
          <label>
            Teléfono/Celular:{" "}
            <input type={"tel"} placeholder="Tu teléfono" required />
          </label>

          <div className="submit_btn__container">
            <Button
              className="submit__btn"
              variant="contained"
              startIcon={<InputIcon />}
              color="success"
            >
              Confirmar compra
            </Button>
          </div>
        </form>
      </div>
      {/* ///////////////// */}
      <div className="volver_btn__container">
        <Button
          className="volver__btn"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={handleReturn}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};
