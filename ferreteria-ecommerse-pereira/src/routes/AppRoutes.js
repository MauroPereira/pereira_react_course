import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes.js";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      user.logged ? <PrivateRoutes />
      : <PublicRoutes />
    </BrowserRouter>
  );
};
