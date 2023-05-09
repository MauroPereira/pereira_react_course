import "./LoadFile.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ref, uploadBytes } from "firebase/storage";
import { storageInstinto as storage } from "../../firebase/config";

const uploadFile = (file) => {
  console.log(file.name);
  const storageRef = ref(storage, file.name);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  });
};

export const LoadFile = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const [file, setFile] = useState(null);

  return (
    <div className="cargar_archivo__container">
      <h2>Cargar archivo</h2>
      <hr />

      <div>
        <form onSubmit={handreSubmit}>
          <input
            type="file"
            name=""
            id=""
            onChange={(el) => setFile(el.target.files[0])}
          ></input>
          <buton>Subir comprobante</buton>
        </form>
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