import { createContext, useState } from "react";

export const LoginContext = createContext();

// Hardcodeado
const MOCK_USER = [
  {
    id: 1,
    email: "invitado@gmail.com",
    password: "invitado@gmail.com",
  },
  {
    id: 2,
    email: "admin@gmail.com",
    password: "admin@gmail.com",
  },
  {
    id: 3,
    email: "mauro.a.pereira@gmail.com",
    password: "mauro.a.pereira@gmail.com",
  },
];

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
  });

  return <LoginContext.Provider>{children}</LoginContext.Provider>;
};
