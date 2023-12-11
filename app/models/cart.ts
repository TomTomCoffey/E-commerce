
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



