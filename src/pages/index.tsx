import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import LeftSideContent from "./components/DisplayLeftside/LeftSideContent";
import ProductItems from "./components/DisplayRightSide/ProductItems";
import CartItems from "./components/DisplayLeftside/CartItems";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add a product to the cart
  const addProductToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === existingProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <main className={`${inter.className}`}>
      <div className="display">
        <div className="display-left">
          <LeftSideContent />
          <CartItems items={cartItems} setItems={setCartItems} />
        </div>
        <div className="display-right">
          <ProductItems addToCart={addProductToCart} />
        </div>
      </div>
    </main>
  );
}
