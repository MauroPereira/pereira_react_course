import { useState } from "react";
import "./LoginScreen.scss";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="login_screen__container">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type={"text"}
          onChange={handleOnChangeEmail}
          className="form-control"
          placeholder="Tu email"
        ></input>
        <input
          value={password}
          type={"text"}
          onChange={handleOnChangePassword}
          className="form-control my-3"
          placeholder="Tu password"
        ></input>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
