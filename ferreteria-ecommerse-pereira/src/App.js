import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { MainTitle } from "./components/MainTitle/MainTitle";
import DolarsiApi from "./components/DolarsiApi/DolarsiApi";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CartContext } from "./context/CartContext";

function App() {
  const nombreDesarrollador = "Mauro Alejandro Pereira";
  const emailDesarrollador = "mauro.a.pereira@gmail.com";

  return (
    <CartContext.Provider
      value={{
        nombreDesarrollador,
        emailDesarrollador,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <MainTitle />
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* {<Footer />} */}
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
