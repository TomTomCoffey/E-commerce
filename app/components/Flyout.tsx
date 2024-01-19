import React, { FC } from "react";
import Cart from "./Cart";
import styles from "./Flyout.module.css";
import { CartItem } from "../models/cart";

interface FlyoutProps {
  cart: CartItem[];
}

const Flyout: FC<FlyoutProps> = ({ cart }) => {
  return (
    <div className={styles.flyout}>
      <Cart cart={cart} />
    </div>
  );
};

export default Flyout;
