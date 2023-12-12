
import type { Product } from "./products";


const cart = [] as CartItem[];

export function useCart() {
    return cart;
}

export interface CartItem {
    productId: number;
    product: Product;
    quantity: number;
}

export function addToCart(product: Product) {
    const item = cart.find((p) => p.productId == product.id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({
            productId: product.id,
            product,
            quantity: 1,
        });
    }
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
}



