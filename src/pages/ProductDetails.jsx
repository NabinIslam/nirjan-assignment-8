import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist } = useWishlist();

  const bookDetails = data.find(book => book.id === productId);

  const isInWishlist = wishlist.find(item => item.id === bookDetails.id);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = bookDetails;

  return (
    <main>
      <Helmet>
        <title>Gadget Heaven | {product_title}</title>
      </Helmet>
      <section className="bg-[#9538E2] pt-10 pb-52">
        <div className="container space-y-3">
          <h2 className="text-3xl text-white font-bold text-center">
            Product Details
          </h2>
          <p className="text-white text-sm text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </section>

      <section className="-mt-40">
        <div className="container">
          <div className="bg-white border shadow-sm rounded-xl p-6 flex items-start max-w-5xl mx-auto gap-9">
            <div className="basis-auto w-[700px]">
              <img className="rounded-lg border" src={product_image} alt="" />
            </div>
            <div className="basis-full space-y-2">
              <h4 className="text-xl font-semibold">{product_title}</h4>
              <h5>Price: ${price}</h5>
              <div>
                <span
                  className={`inline-block rounded-full px-5 py-2 ${
                    availability ? "bg-green-700" : "bg-red-700"
                  }  bg-opacity-80 text-white text-sm`}
                >
                  {availability ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <p className="text-sm">{description}</p>

              <h6 className="font-semibold">Specification:</h6>
              <ol className="space-y-2 list-decimal pl-5 text-sm">
                {specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ol>

              <h6 className="font-semibold">Rating ⭐ </h6>
              <div className="text-sm">
                <Rating
                  initialValue={rating}
                  size="20px"
                  /* Available Props */
                />
                <span>{rating}</span>
              </div>

              <div className="flex items-center justify-start gap-3">
                <button
                  className="bg-[#9538E2] text-white text-sm px-5 py-2 rounded-full flex items-center gap-2"
                  onClick={() => {
                    addToCart(bookDetails);
                    toast("Product added to cart successfully");
                  }}
                >
                  Add To Card <IoCartOutline className="text-xl" />
                </button>
                <button
                  className="bg-white border text-black text-xl p-2 rounded-full"
                  onClick={() => {
                    addToWishlist(bookDetails);
                    toast("Product added to wishlist successfully");
                  }}
                  disabled={isInWishlist}
                >
                  <IoMdHeartEmpty />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
