import "./ItemDetailContainer.scss";
import { dataRequestforId } from "../../helpers/dataRequest";
import { useState } from "react";
import { useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    dataRequestforId(1)
      .then((resp) => {
        setItem(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2> Item Detail Container</h2>
      <hr />
    </div>
  );
};

export default ItemDetailContainer;
