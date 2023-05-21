import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
        {/* {<Footer />} */}
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
