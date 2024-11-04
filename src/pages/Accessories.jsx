import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Accessories = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProducts
          .filter(item => item.category === "Accessories")
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Accessories;
