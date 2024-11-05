import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { product_image, product_title, price, id } = product;

  return (
    <div className="border p-5 shadow-sm rounded-xl bg-white space-y-2">
      <div className="h-[300px]">
        <img
          className="border size-full rounded-lg"
          src={product_image}
          alt=""
        />
      </div>

      <h5 className="text-lg font-medium">{product_title}</h5>

      <h6 className="text-sm font-semibold">Price: {price}$</h6>

      <div>
        <Link to={`/product-details/${id}`}>
          <button className="bg-[#9538E2] text-white text-sm px-5 py-2 rounded-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
