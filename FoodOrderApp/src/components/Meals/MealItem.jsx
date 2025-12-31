import React, { useContext, useState } from "react";
import CartContext from "../Cart/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: props.price,
    });
  };

  return (
    <li className="meal">
      <div className="meal-info">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">₹{props.price}</div>
      </div>

      <div className="meal-actions">
        <div className="amount">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={addToCartHandler}>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
