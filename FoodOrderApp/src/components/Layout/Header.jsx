import React, { useContext } from "react";
import "./Header.css";
import CartContext from "../Cart/CartContext";


const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce(
    (cur, item) => cur + item.amount,
    0
  );

  return (
    <header className="header">
      <h1>ReactMeals</h1>
      <button className="cart-btn" onClick={props.onShowCart}>
        🛒 Your Cart <span className="badge">{numberOfItems}</span>
      </button>
    </header>
  );
};

export default Header;
