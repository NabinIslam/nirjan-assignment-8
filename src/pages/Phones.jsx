import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet-async";

const Phones = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Phones</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProducts
          .filter(item => item.category === "Phones")
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Phones;
