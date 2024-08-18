import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WishlistContext = createContext([]);

export function WishlistProvider({ children }) {
  const [list, setList] = useState([]);

  // Refresh state
  useEffect(() => {
    if (localStorage.getItem('wishlist') !== null) {
      setList(JSON.parse(localStorage.getItem('wishlist')));
    }
  }, []);

  // Adds a new item to the wishlist
  const addToWishlist = (item) => {
    // Checks for item in wishlist
    const prevItem = list.find((elem) => elem.id === item.id);

    // Only add item where it doesn't already exist.
    if (!prevItem) {
      const newList = [...list, item];
      // save to localstorage & update state
      localStorage.setItem('wishlist', JSON.stringify(newList));
      setList(newList);
    }
  };

  // Removes an item from the wishlist
  const removeFromWishlist = (id) => {
    // Filter out unwanted item
    const newList = list.filter((item) => item.id !== id);

    // save to localstorage & update state
    localStorage.setItem('wishlist', JSON.stringify(newList));
    setList(newList);
  };

  return (
    <WishlistContext.Provider value={{ addToWishlist, removeFromWishlist }}>
      { children }
    </WishlistContext.Provider>
  )
}

WishlistProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

// eslint-disable-next-line
export const useWishlist = () => useContext(WishlistContext);