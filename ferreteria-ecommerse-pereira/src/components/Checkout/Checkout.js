import "./Checkout.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputIcon from "@mui/icons-material/Input";
// import { Formik } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const SuccessPurchase = (order) => {
  Swal.fire({
    title: "Gracias por tu compra",
    text: `${order.client.firstNames} ${order.client.lastNames} tu pedido está siendo preparado. Pronto recibirás más información a ${order.client.email} `,
    icon: "success",
  });
};

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const { cart, totalPrice } = useContext(CartContext);

  const [values, setValues] = useState({
    firstNames: "",
    lastNames: "",
    address: "",
    email: "",
    contactNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones

    const order = {
      client: values,
      items: cart,
      finalPrice: totalPrice(),
      date: new Date(),
    };

    console.log("Submit", order);
    SuccessPurchase(order);
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
              name="firstNames"
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
              name="lastNames"
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
