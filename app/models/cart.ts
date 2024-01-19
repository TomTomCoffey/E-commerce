import { useState } from "react";
import type { Product } from "./products";

const cart = [] as CartItem[];

export default function useCart(): [CartItem[], (product: Product) => void] {
  const [cart, setCart] = useState<CartItem[]>([]);
  function addToCart(product: Product) {
    const item = cart.find((p) => p.productId == product.id);
    if (item) {
      setCart([
        ...cart.filter((item_2) => item_2.productId != item.productId),
        { ...item, quantity: item.quantity + 1 },
      ]);
    } else {
      setCart([...cart, { productId: product.id, product, quantity: 1 }]);
    }
  }
  return [cart, addToCart];
}



export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

export function removeFromCart(productId: number) {
  const index = cart.findIndex((p) => p.productId == productId);
  if (index != -1) {
    cart.splice(index, 1);
  }
}

export const total = () => {
  return cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
};
