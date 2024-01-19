"use client";
import React from "react";
import { getProducts, type Product } from "../../app/models/products";
import styles from "./Products.module.css";
import useCart from "../../app/models/cart";
import { useEffect } from "react";
import { useState } from "react";
import Flyout from "../../app/components/Flyout";
import { useSession } from "next-auth/react";

const Pages = () => {
  const [cart, addToCart] = useCart();

  const { status, data: session } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("unauthenticated");
    } else {
      console.log(session);
    }
  }, [status]);

  return (
    <div className={styles.productList}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productsContainer}>
        {getProducts().map((product: Product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.priceContainer}>
                <span className={styles.currency}>$</span>
                <span className={styles.productPrice}>{product.price}</span>
              </div>
              {/* <button className={`${styles.btn} ${styles.primaryBtn}`} onClick={() => addToCartHelp(product)}>Add to Cart</button> */}
              <button
                className={`${styles.btn} ${styles.primaryBtn}`}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Flyout cart={cart} />
    </div>
  );
};

export default Pages;
