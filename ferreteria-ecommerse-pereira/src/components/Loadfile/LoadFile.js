import "./LoadFile.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const LoadFile = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="cargar_archivo__container">
      <h2>Cargar archivo</h2>
      <hr />

      <div>
        <input
          type="file"
          name=""
          id=""
          onChange={(el) => console.log(el.target.files[0])}
        ></input>
      </div>

      <div className="btns_container"></div>
      <Button
        className="volver__btn"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={handleReturn}
      >
        Volver
      </Button>
    </div>
  );
};
