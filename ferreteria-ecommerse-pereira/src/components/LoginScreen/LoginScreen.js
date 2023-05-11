import "./LoginScreen.scss";
import { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const LoginScreen = () => {
  const { tryLogin } = useContext(LoginContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    // Se aplica spread y actualizo la propiedad correspondiente, debido a que no puedo tener dos con el mismo
    // nombre, se sobreescribe. [] es un selector dinámico de propiedades
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tryLogin(values);
  };

  return (
    <div className="login_screen__container">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={values.email}
          type={"text"}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Tu email"
          name="email"
        ></input>
        <input
          value={values.password}
          type={"password"}
          onChange={handleInputChange}
          className="form-control my-3"
          placeholder="Tu password"
          name="password"
        ></input>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
