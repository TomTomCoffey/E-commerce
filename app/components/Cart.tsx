"use client";
import React, { FC } from "react";
import useCart, { total, removeFromCart, CartItem } from "../models/cart";
import styles from "./Cart.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Flyout from "./Flyout";

interface CartProps {
  cart: CartItem[];
}

const Cart: FC<CartProps> = ({ cart }) => {
  return (
    <div>
      <div className={styles.cart}>
        <h1 className={styles.title}>
          Cart
          <small>(total) ({cart.length} items)</small>
        </h1>
      </div>
      <p></p>
      {cart.map((item) => (
        <div className={styles.cartitem}>
          <img
            src={item.product.thumbnail}
            alt={item.product.title}
            className={styles.cartimage}
          />
          <div className={styles.cartinfo}>
            <h3 className={styles.carttitle}>{item.product.title}</h3>
            <p className={styles.cartdescription}>{item.product.description}</p>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.cartprice}>{item.product.price}</span>
            </div>
            <button
              className={`${styles.btn} ${styles.primaryBtn}`}
              onClick={() => removeFromCart(item.productId)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
