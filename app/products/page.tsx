import React from 'react'
import { getProducts, type Product } from '../models/products'

const pages = () => {
  return (
    <div className='product-list'>
      <div className="h1">Products</div>
        {getProducts().map((product: Product) => (
          <div key={product.id}>
            <div className="product">
              <img src={product.thumbnail} alt={product.title} style={{width:'300px', height: '400px',objectFit: 'cover'}} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>
                <span>$</span>
                <i className="price">{product.price}</i>
              </p>
              <button className="btn is-primary">+</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default pages