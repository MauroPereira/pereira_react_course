import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputIcon from "@mui/icons-material/Input";
import { Formik } from "formik";
import { useState } from "react";

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const [values, setValues] = useState({
    firstNames: "",
    lastNames: "",
    address: "",
    email: "",
    contactNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit", values);
  };

  const handeInputChange = (el) => {
    setValues({
      ...values,
      [el.target.name]: el.target.value,
    });
  };

  return (
    <div className="checkout__container">
      <h2>Checkout</h2>
      <hr />
      {/* ////// Formulario */}
      {/* <Formik
        initialValues={{
          firstNames: "",
          apellido: "",
          address: "",
          email: "",
          contactNumber: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
         
        )}
      </Formik> */}
      {/* ///////////////// */}
      <div className="form__container" onSubmit={handleSubmit}>
        <form>
          <label>
            Nombres:{" "}
            <input
              onChange={handeInputChange}
              value={values.firstNames}
              type={"text"}
              placeholder="Tus nombres"
              required
              name="firstName"
            />{" "}
          </label>
          <br></br>
          <label>
            Apellidos:{" "}
            <input
              onChange={handeInputChange}
              value={values.lastNames}
              type={"text"}
              placeholder="Tus apellidos"
              required
              name="lastName"
            />
          </label>
          <br></br>
          <label>
            Dirección de entrega:{" "}
            <input
              onChange={handeInputChange}
              value={values.address}
              type={"text"}
              placeholder="Tu dirección"
              required
              name="address"
            />
          </label>
          <br></br>
          <label>
            e-mail:{" "}
            <input
              onChange={handeInputChange}
              value={values.email}
              type={"email"}
              placeholder="Tu e-mail"
              required
              name="email"
            />
          </label>
          <br></br>
          <label>
            Teléfono/Celular:{" "}
            <input
              onChange={handeInputChange}
              value={values.contactNumber}
              type={"tel"}
              placeholder="Tu teléfono o celular"
              required
              name="contactNumber"
            />
          </label>

          <div className="submit_btn__container">
            <Button
              className="submit__btn"
              variant="contained"
              startIcon={<InputIcon />}
              color="success"
              type="submit"
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
