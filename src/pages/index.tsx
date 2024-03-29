import React, { useState } from "react";
import { Inter } from "next/font/google";
import LeftSideContent from "./components/DisplayLeftside/LeftSideContent";
import ProductItems from "./components/DisplayRightSide/ProductItems";
import CartItems from "./components/DisplayLeftside/CartItems";
import Head from "next/head";

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

  const addProductToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === existingProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Head>
        <title>N R SHAGOR || POS</title>
      </Head>
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
    </>
  );
}
