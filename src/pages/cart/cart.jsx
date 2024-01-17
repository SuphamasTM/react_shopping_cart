import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import Swal from "sweetalert2";
import "./cart.css";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ฿{totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            className="bttnCheckOut"
            onClick={async () => {
              await Swal.fire({
                title: "Comfirm the order?",
                text: `Subtotal : ฿${totalAmount}`,
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "rgb(11, 144, 17)",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, confirm!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "The order was successful",
                    text: "Thank you for ordering.",
                    icon: "success",
                  });
                  checkout();
                }
              });
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
