'use client'
import React from 'react'
import { useCart, total } from '../models/cart';
import styles from './Cart.module.css';

const cart = useCart();

const tot = total;



const Cart = () => {
   // Replace 0 with your actual total value

    return (

        <div>
        <div className={styles.cart}>
            <h1 className={styles.title}>
                Cart
                <small>
                     (tot)  ({cart.length} items)
                </small>
            </h1>
        </div>
        <p></p>
        {cart.map((item) => (
            <div className={styles.cartitem}>
                <img src={item.product.thumbnail} alt={item.product.title} className={styles.cartimage}/>
                <div className={styles.cartinfo}>
                    <h3 className={styles.carttitle}>{item.product.title}</h3>
                    <p className={styles.cartdescription}>{item.product.description}</p>
                    <div className={styles.priceContainer}>
                        <span className={styles.currency}>$</span>
                        <span className={styles.cartprice}>{item.product.price}</span>
                    </div>
                    <button className={`${styles.btn} ${styles.primaryBtn}`}>Remove from Cart</button>
                </div>
            </div>

        ))}
        </div>
        
    );
};
   


export default Cart