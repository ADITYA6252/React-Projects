import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

 
  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, amount: i.amount + item.amount }
            : i
        );
      }

      return prevItems.concat(item);
    });
  };


  const removeItemHandler = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };


  const clearCartHandler = () => {
    setItems([]);
  };


  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
