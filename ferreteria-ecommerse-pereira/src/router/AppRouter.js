import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Navbar } from "../components/Navbar/Navbar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { MainTitle } from "../components/MainTitle/MainTitle";
import DolarsiApi from "../components/DolarsiApi/DolarsiApi";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import { Cart } from "../components/Cart/Cart";
import { Checkout } from "../components/Checkout/Checkout";
import { LoadFile } from "../components/Loadfile/LoadFile";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";

export const AppRouter = () => {
  const { user } = useContext(LoginContext);

  return (
    <BrowserRouter>
      {user.logged ? (
        <>
          <Navbar />
          <MainTitle />
          {/* Rutas privadas */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <DolarsiApi />
                  <ItemListContainer greeting="Productos" />
                </div>
              }
            />
            <Route
              path="/productos/:categoryId"
              element={
                <div>
                  <DolarsiApi />
                  <ItemListContainer greeting="Productos" />
                </div>
              }
            />
            <Route
              path="/detail/:itemId"
              element={
                <div>
                  <DolarsiApi />
                  <ItemDetailContainer greeting="Detalle de producto" />
                </div>
              }
            />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <div>
                  <DolarsiApi />
                  <Cart />
                </div>
              }
            />
            <Route
              path="/checkout"
              element={
                <div>
                  <DolarsiApi />
                  <Checkout />
                </div>
              }
            />
            <Route
              path="/loadfile"
              element={
                <div>
                  <LoadFile />
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
