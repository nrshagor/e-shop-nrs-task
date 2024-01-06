// ProductItems.tsx

import React from "react";
import style from "@/styles/productItems.module.scss";
import Image from "next/image";
import polo from "../../../../public/images/polo.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
}

interface ProductItemsProps {
  addToCart: (product: Product) => void;
}

const ProductItems: React.FC<ProductItemsProps> = ({ addToCart }) => {
  const products: Product[] = [
    { id: 1, name: "Pure White Plolo", price: 83, image: polo },
    { id: 2, name: "Pure Black Plolo", price: 90, image: polo },
    { id: 3, name: "White Plolo", price: 50, image: polo },
    // Add more products as needed
  ];

  return (
    <div className={style.productItemsSection}>
      <div className={style.productItemsManu}>
        <button>All Categories</button>
        <button>Electronics</button>
        <button>Home & Lifestyle</button>
      </div>
      <div className={style.product}>
        {products.map((product) => (
          <div
            key={product.id}
            className={style.productCard}
            onClick={() => addToCart(product)}
          >
            <Image src={product.image} alt="image" />
            <span>${product.price}</span>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
