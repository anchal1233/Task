import React from "react";

type Product = {
 id: number
 name: string
 price: number
}

type Props = {
 product: Product
}

const ProductCard = React.memo(({ product }: Props) => {

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