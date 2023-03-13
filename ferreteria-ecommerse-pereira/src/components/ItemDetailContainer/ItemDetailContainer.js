import "./ItemDetailContainer.scss";
import { dataRequestforId } from "../../helpers/dataRequest";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [Loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    dataRequestforId(Number(itemId))
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
