import React, { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = item => {
    setWishlist(prevWishlist => [...prevWishlist, item]);
  };

  const removeFromWishlist = item => {
    setWishlist(prevWishlist =>
      prevWishlist.filter(wishlistItem => wishlistItem.id !== item.id)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
