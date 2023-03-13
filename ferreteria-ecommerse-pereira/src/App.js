import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Categories } from "./components/Categories/Categories";
import {
  ItemListContainer,
  ItemListContainerMui,
} from "./components/ItemListContainer/ItemListContainer";
import { MainTitle } from "./components/MainTitle/MainTitle";
import DolarsiApi from "./components/DolarsiApi/DolarsiApi";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainTitle />
      <AboutUs />
      <Contact />
      <DolarsiApi />
      <ItemListContainer greeting="Productos" />
    </BrowserRouter>

    // <BrowserRouter>
    //   {/* Común a todos */}
    //   <Navbar />

    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <di>
    //           <MainTitle />
    //           <ItemListContainer greeting="Grandes ofertas en" />
    //         </di>
    //       }
    //     />

    //     <Route path="/" element={<ItemListContainerMui />} />
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/contacto" element={<Contacto />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>

    //   {/* {<Footer />} */}
    // </BrowserRouter>
  );
}

export default App;
