import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      let accu = 0;

      cart.forEach((prod) => {
        accu += prod.count * prod.price;
      });

      return accu;
    };
    const total = getTotal();
    setTotal(total);
  }, [cart]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      setCart(
        cart.map((prod) => {
          return prod.id === productToAdd.id
            ? { ...prod, count: productToAdd.count }
            : prod;
        })
      );
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithoutProduct = cart.filter((prod) => prod.id !== id);
    setCart(cartWithoutProduct);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.count;
  };

  const totalQuantity = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
