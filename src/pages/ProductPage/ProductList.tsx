import { useMemo, useState, useRef } from "react";
import ProductCard from "./ProductCard";

const products = Array.from({ length: 5000 }).map((_, i) => ({
 id: i,
 name: `Product ${i}`,
 price: Math.floor(Math.random() * 100),
}));

const ITEM_HEIGHT = 80;
const VISIBLE_COUNT = 20;

export default function ProductList({ search, sort }) {

 const containerRef = useRef(null);
 const [scrollTop, setScrollTop] = useState(0);

 const filteredProducts = useMemo(() => {

  let result = products.filter((p) =>
   p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
   result = [...result].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
   result = [...result].sort((a, b) => b.price - a.price);
  }

  return result;

 }, [search, sort]);

 const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
 const visibleProducts = filteredProducts.slice(
  startIndex,
  startIndex + VISIBLE_COUNT
 );

 const handleScroll = (e) => {
  setScrollTop(e.target.scrollTop);
 };

 return (
  <div
   ref={containerRef}
   onScroll={handleScroll}
   style={{
    
    overflowY: "visible",
    position: "relative",
    border: "1px solid #ddd",
   }}
  >

   <div
    style={{
     height: filteredProducts.length * ITEM_HEIGHT,
     position: "relative",
    }}
   >

    {visibleProducts.map((product, index) => {
     const top = (startIndex + index) * ITEM_HEIGHT;

     return (
      <div
       key={product.id}
       style={{
        position: "relative",
        top: top,
        left: 0,
        right: 0,
       }}
      >
       <ProductCard product={product} />
      </div>
     );
    })}

   </div>

  </div>
 );
}