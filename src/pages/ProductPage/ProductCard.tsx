import React from "react";

const ProductCard = React.memo(({ product }) => {

 return (
  <div
   style={{
    border: "1px solid #ddd",
    padding: "10px",
    margin: "5px",
    background: "#fff",
    borderRadius: "6px"
   }}
  >
   <h4>{product.name}</h4>
   <p>Price: ${product.price}</p>
  </div>
 );

});

export default ProductCard;