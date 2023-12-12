import React from 'react'
import { addToCart } from '../models/cart'
import { Product, getProducts } from '../models/products'
import styles from './AddToCartButton.module.css'

interface Props {
  product: Product
}

const products = getProducts()



const AddToCartButton = () => {
  return (
    <button className={`${styles.btn} ${styles.primaryBtn}`} onClick={() => addToCart(products[0])}>Add to Cart</button>
  )
}

export default AddToCartButton