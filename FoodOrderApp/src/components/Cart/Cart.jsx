import React, { useContext, useState } from "react";
import "./Cart.css";
import CartContext from "./CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const orderHandler = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setOrderSuccess(true);
      cartCtx.clearCart();

      setTimeout(() => {
        props.onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>

      <div className="cart-modal">
        {!orderSuccess && (
          <>
            <div className="total">
              <span>Total Amount</span>
              <span>${cartCtx.totalAmount.toFixed(2)}</span>
            </div>

            <div className="actions">
              <button className="close" onClick={props.onClose}>
                Close
              </button>
              <button
                className="order"
                onClick={orderHandler}
                disabled={cartCtx.items.length === 0 || isOrdering}
              >
                {isOrdering ? "Ordering..." : "Order"}
              </button>
            </div>
          </>
        )}

        {orderSuccess && (
          <div className="success">
            <h2>✅ Order Placed Successfully</h2>
            <p>Thank you for ordering with us!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
