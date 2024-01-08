// CartItems.tsx

import React, { useState } from "react";
import style from "@/styles/cartItems.module.scss";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemsProps {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartItems: React.FC<CartItemsProps> = ({ items = [], setItems }) => {
  const handleDecreaseQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate subtotal, tax, shipping, discount, and total based on items
  const subtotal = items
    ? items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const tax = 25.0;
  const shipping = 5.5;
  const discount = 10.0;

  const total =
    subtotal + tax + shipping - discount > 0
      ? subtotal + tax + shipping - discount
      : 0;

  return (
    <div>
      {items &&
        items.map((item) => (
          <div key={item.id} className={style.cartItems}>
            <div className={style.cartItemsLeft}>
              <FaEdit />
            </div>
            <div className={style.cartItemsMiddle}>
              <div className={style.itemsName}>{item.name}</div>
              <div className={style.itemsPrices}>${item.price.toFixed(2)}</div>
              <div className={style.itemsQuantity}>
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  <FaMinusCircle />
                </button>
                <p>{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  <FaCirclePlus />
                </button>
              </div>
              <div className={style.itemsTotalPrices}>
                ${(item.quantity * item.price).toFixed(2)}
              </div>
            </div>
            <div
              className={style.cartItemsRight}
              onClick={() => handleRemoveItem(item.id)}
            >
              <RiDeleteBin6Line />
            </div>
          </div>
        ))}
      <div className={style.amountSection}>
        <div className={style.calculateAmount}>
          <div className={style.subTotal}>
            <p>Subtotal</p> <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={style.tax}>
            <p>Tax</p> <span>${tax.toFixed(2)}</span>
          </div>
          <div className={style.shipping}>
            <p>Shipping</p> <span>${shipping.toFixed(2)}</span>
          </div>
          <div className={style.discount}>
            <p>Discount</p> <span>${discount.toFixed(2)}</span>
          </div>
        </div>
        <div className={style.totalAmount}>
          <p>
            Product Count <span>{items.length}</span>
          </p>
          <h2>Total</h2>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className={style.cartItemsFooter}>
          <button onClick={() => setItems([])}>Cancel</button>
          <button>Hold</button>
          <button>Discount</button>
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
