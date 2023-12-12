'use client';
import React from 'react';
import { getProducts, type Product } from '../models/products';
import styles from './Products.module.css';
import { useCart } from '../models/cart';
import { addToCart } from '../models/cart';


const cart = useCart();

const Pages = () => {

  function addToCartHelp(product: Product) {
    addToCart(product);
    console.log("Added to cart");
    console.log(product);
  }



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
              <button className={`${styles.btn} ${styles.primaryBtn}`} onClick={() => addToCartHelp(product)}>Add to Cart</button>
    </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pages;
