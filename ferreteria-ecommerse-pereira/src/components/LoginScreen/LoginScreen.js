import { useState } from "react";
import "./LoginScreen.scss";

export const LoginScreen = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    // Se aplica spread y actualizo la propiedad correspondiente, debido a que no puedo tener dos con el mismo
    // nombre, se sobreescribe. [] es un selector dinámico de propiedades
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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
          type={"text"}
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
