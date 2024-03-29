import "./Checkout.scss";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputIcon from "@mui/icons-material/Input";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  writeBatch,
  where,
  documentId,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";

// Esquéma de validación de datos
const checkoutValidationSchema = Yup.object().shape({
  firstNames: Yup.string()
    .required("Campo obligatorio")
    .min(3, "Mínimo 3 carácteres")
    .max(40, "Máximo 40 carácteres"),
  lastNames: Yup.string()
    .required("Campo obligatorio")
    .min(3, "Mínimo 3 carácteres")
    .max(40, "Máximo 40 carácteres"),
  address: Yup.string()
    .required("Campo obligatorio")
    .min(3, "Mínimo 3 carácteres")
    .max(40, "Máximo 40 carácteres"),
  email: Yup.string()
    .email("El email es inválido")
    .required("Campo obligatorio"),
  contactNumber: Yup.number()
    .typeError("Número telefónico inválido")
    .required("Campo obligatorio")
    .lessThan(9999999999, "Sobran números")
    .moreThan(1111111111, "Faltan números"),
});

const SuccessPurchaseMsg = (order, id, isConfirmedFunction) => {
  Swal.fire({
    title: "Gracias por tu compra",
    text: `${order.client.firstNames} ${order.client.lastNames} tu pedido con código ${id} está siendo preparado. Pronto recibirás más información a ${order.client.email}.`,
    icon: "success",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      isConfirmedFunction();
    }
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

const NoStockPurchaseMsg = (order, itemList) => {
  Swal.fire({
    allowOutsideClick: false,
    title: "No se pudo llevar a cabo su compra!",
    text: `Lo sentimos ${order.client.firstNames} ${
      order.client.lastNames
    }, no hay suficiente stock de ${itemList.join(", ")} para su compra.`,
    icon: "error",
  });
};

export const Checkout = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const { cart, totalPrice, eraseCart } = useContext(CartContext);

  const generateOrder = async (values) => {
    // Creación de objeto order
    const order = {
      client: values,
      items: cart,
      finalPrice: totalPrice(),
      date: new Date(),
    };

    WaitingPurchaseMsg(order);

    // sync
    const batch = writeBatch(db);
    const productsRef = collection(db, "productos");
    const ordersRef = collection(db, "orders");
    const itemsWithoutStockRequired = [];

    // Actualización de stock async
    const itemsRef = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    ); // se obtiene la referencia a los items

    const response = await getDocs(itemsRef);

    response.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id); // se busca su paralelo en el carrito

      // Se chequea que haya suficiente stock para el pedido
      if (doc.data().stock >= item.quantity) {
        batch.update(doc.ref, { stock: doc.data().stock - item.quantity });
      } else {
        itemsWithoutStockRequired.push(item.name); // se crea una lista de los nombres de los items sin suficiente stock para la orden
      }
    });

    if (itemsWithoutStockRequired.length === 0) {
      await batch.commit(); // actualiza Firestore en base a las intrucciones anteriores

      ///////////////////////////
      // Creación de orden async
      addDoc(ordersRef, order)
        .then((doc) => {
          SuccessPurchaseMsg(order, doc.id, eraseCart); // muestra mensaje de éxito y borra el carrito
        })
        .catch((error) => {
          ErrorPurchaseMsg("Ha ocurrido un error!", order); // muestra mensaje de error y no borra el carrito
        });
      ///////////////////////////
    } else NoStockPurchaseMsg(order, itemsWithoutStockRequired); // llama a mostrar un mensaje con todos los items sin suficiente stock
  };

  // Evita entrar al Checkout sin items en el carrito
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="checkout__container">
      <h2>Checkout</h2>
      <hr />

      <div className="form__container">
        <Formik
          initialValues={{
            firstNames: "",
            lastNames: "",
            address: "",
            email: "",
            contactNumber: "",
          }}
          validationSchema={checkoutValidationSchema}
          onSubmit={generateOrder}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                className="checkout__textfield first__textfield"
                name="firstNames"
                label={"Nombres"}
                variant="filled"
                value={values.firstNames}
                onChange={handleChange}
                error={Boolean(errors.firstNames)}
                helperText={
                  Boolean(errors.firstNames) ? errors.firstNames : " "
                }
              />
              <br></br>
              <TextField
                fullWidth
                className="checkout__textfield"
                name="lastNames"
                label="Apellidos"
                variant="filled"
                value={values.lastNames}
                onChange={handleChange}
                error={Boolean(errors.lastNames)}
                helperText={Boolean(errors.lastNames) ? errors.lastNames : " "}
              />
              <br></br>
              <TextField
                fullWidth
                className="checkout__textfield"
                name="address"
                label="Dirección"
                variant="filled"
                value={values.address}
                onChange={handleChange}
                error={Boolean(errors.address)}
                helperText={Boolean(errors.address) ? errors.address : " "}
              />
              <br></br>
              <TextField
                fullWidth
                className="checkout__textfield"
                name="email"
                label="e-mail"
                variant="filled"
                value={values.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) ? errors.email : " "}
              />
              <br></br>
              <TextField
                fullWidth
                className="checkout__textfield"
                name="contactNumber"
                label="Teléfono"
                variant="filled"
                value={values.contactNumber}
                onChange={handleChange}
                error={Boolean(errors.contactNumber)}
                helperText={
                  Boolean(errors.contactNumber) ? errors.contactNumber : " "
                }
              />
              <br></br>
              <div className="submit_btn__container">
                <Button
                  className="submit__btn"
                  variant="contained"
                  startIcon={<InputIcon />}
                  color="success"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Confirmar compra
                </Button>
              </div>
              <div className="volver_btn__container">
                <Button
                  className="volver__btn"
                  variant="contained"
                  startIcon={<ArrowBackIcon />}
                  onClick={handleReturn}
                  disabled={isSubmitting}
                >
                  Volver
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
