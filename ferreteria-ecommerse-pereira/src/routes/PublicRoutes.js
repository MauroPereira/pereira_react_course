import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/LoginScreen/LoginScreen";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
