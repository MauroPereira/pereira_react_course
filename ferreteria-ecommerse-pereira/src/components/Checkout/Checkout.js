import "./Checkout.scss";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputIcon from "@mui/icons-material/Input";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
// import { Formik } from "formik";

const SuccessPurchaseMsg = (order, id) => {
  Swal.fire({
    title: "Gracias por tu compra",
    text: `${order.client.firstNames} ${order.client.lastNames} tu pedido con código ${id} está siendo preparado. Pronto recibirás más información a ${order.client.email}.`,
    icon: "success",
  });
};

const WaitingPurchaseMsg = (order) => {
  Swal.fire({
    title: "Espere por favor...",
    text: `${order.client.firstNames} ${order.client.lastNames} su orden está siendo procesada`,
    icon: "warning",
    showConfirmButton: false,
  });
};

const ErrorPurchaseMsg = (order) => {
  Swal.fire({
    title: "No se pudo llevar a cabo su compra!",
    text: `Lo sentimos ${order.client.firstNames} ${order.client.lastNames}, por favor comuníquese a +543512546109 para realizar la compra telefónicamente.`,
    icon: "error",
  });
};

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const { cart, totalPrice, eraseCart } = useContext(CartContext);

  const [values, setValues] = useState({
    firstNames: "",
    lastNames: "",
    address: "",
    email: "",
    contactNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validaciones

    // Creación de objeto order
    const order = {
      client: values,
      items: cart,
      finalPrice: totalPrice(),
      date: new Date(),
    };

    WaitingPurchaseMsg(order);

    // Sync
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "productos");

    // Actualización de stock asíncrona
    cart.forEach((item) => {
      const docRef = doc(productsRef, item.id); // para tener actualizado el stock que existe al momento de descontarlo, en caso de que otro usuario lo haya consumido

      // Se trae el documento, se modifica el stock del mismo y se actualiza el documento
      getDoc(docRef)
        .then((doc) => {
          updateDoc(docRef, {
            stock: doc.data().stock - item.quantity,
          });

          SuccessPurchaseMsg(order, doc.id);
        })
        .catch((error) => {
          ErrorPurchaseMsg("Ha ocurrido un error!", order);
        });
    });

    // // Creación de orden asíncrono
    // addDoc(ordersRef, order)
    //   .then((doc) => {
    //     SuccessPurchaseMsg(order, doc.id);
    //     // Se borra el carrito
    //     eraseCart();
    //   })
    //   .catch((error) => {
    //     ErrorPurchaseMsg("Ha ocurrido un error!", order);
    //   });
  };

  const handeInputChange = (el) => {
    setValues({
      ...values,
      [el.target.name]: el.target.value,
    });
  };

  // Evita entrar al Checkout sin items en el carrito
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

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
