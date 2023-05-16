import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock/AsyncMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((product) => {
      setProduct(product);
    });
  });

  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
