import { useState } from "react";
import ProductList from "./ProductList";

export default function ProductPage() {

 const [search, setSearch] = useState("");
 const [sort, setSort] = useState("");

 return (
  <div style={{ padding: "20px" }}>

   <h1>Products</h1>

   <div style={{ marginBottom: "15px" }}>

    <input
     placeholder="Search product"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     style={{ marginRight: "10px" }}
    />

    <select
     value={sort}
     onChange={(e) => setSort(e.target.value)}
    >
     <option value="">Sort</option>
     <option value="low">Price Low → High</option>
     <option value="high">Price High → Low</option>
    </select>

   </div>

   <ProductList search={search} sort={sort} />

  </div>
 );
}