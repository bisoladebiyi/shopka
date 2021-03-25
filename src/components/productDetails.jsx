import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useFetch("http://localhost:3000/products/" + id);
  return (
    <div>
      {product && (
        <div className="product-details">
            <img src={product.img} alt="" />
            <div>
              <p>{product.desc}</p>
              <p>{product.price}</p>
              <p>{product.info}</p>
              <button>Add to Cart</button>
            </div>
          </div>
      )}
    </div>
  );
};

export default ProductDetails;
