import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="py-20 space-y-10">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Wishlist</h3>
      </div>

      <div className="space-y-5">
        {wishlist.map(item => (
          <div className="flex items-center gap-x-5 bg-white rounded-2xl p-5 border shadow-sm">
            <div>
              <img
                src={item.product_image}
                className="w-[200px] h-[150px] rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{item.product_title}</h4>
              <p className="text-sm">{item.description}</p>
              <h6 className="">Price: ${item.price}</h6>
              <button
                className="bg-[#9538E2] text-white text-sm px-5 py-2 rounded-full flex items-center gap-2"
                onClick={() => {
                  addToCart(item);
                  toast("Product added to cart successfully");
                }}
              >
                Add To Card <IoCartOutline className="text-xl" />
              </button>
            </div>
            <button
              className="ml-auto border-2 border-red-500 rounded-full p-1"
              onClick={() => {
                removeFromWishlist(item);
                toast("Product removed from wishlist successfully");
              }}
            >
              <RxCross2 className="text-red-500 text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
