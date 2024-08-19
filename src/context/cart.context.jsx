import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0.00);

  // load in data from localstorage
  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  // calculates values and updates state on cart change
  useEffect(() => {
    // set count to new size of cart
    setCount(cart.length);

    // calculate total amount
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (item) => {
    // Checking cart for item
    const prevItem = cart.find((elem) => elem.id === item.id);
    let outputCart;

    // If item not existing
    if (!prevItem) {
      // create a new cart
      outputCart = [...cart, item];
    } else {
      // Increase the quantity of item in cart
      outputCart = [...cart];
      outputCart.forEach((elem) => {
        if (elem.id === item.id) elem.quantity++;
      });
    }

    // Update localstorage & state
    localStorage.setItem('cart', JSON.stringify(outputCart));
    setCart(outputCart);
  };

  const removeFromCart = (id) => {
    // Filter out the item in question
    const outputCart = cart.filter((item) => item.id !== id);

    // update localStorage & state
    localStorage.setItem('cart', JSON.stringify(outputCart));
    setCart(outputCart);
  };

  const clearCart = () => {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
    }
  };

  return (
    <CartContext.Provider value={{
      count,
      total,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

// eslint-disable-next-line
export const useCart = () => useContext(CartContext);