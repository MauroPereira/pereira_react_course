import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRouter />
          {/* {<Footer />} */}
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
