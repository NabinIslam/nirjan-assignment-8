import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";

const Laptops = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Laptops</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProducts
          .filter(item => item.category === "Laptops")
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Laptops;
