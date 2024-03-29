import data from "../data/products.json";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

//  export function getProducts(): Product[] {
//      return data.products;
//  }

export async function getProducts(): Promise<Product[] | undefined> {
  fetch("https://dummyjson.com/products/")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return data.products;
}

export function getAllProducts(): Product[] {
  fetch("https://dummyjson.com/products/")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return data.products;
}
