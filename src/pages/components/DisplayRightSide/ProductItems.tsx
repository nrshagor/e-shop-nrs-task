import React, { useState } from "react";
import style from "@/styles/productItems.module.scss";
import searchStyle from "@/styles/rightSideConttent.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";
import bluepolo from "../../../../public/images/polo.jpg";
import blackpolo from "../../../../public/images/blackpolo.jpg";
import whitepolo from "../../../../public/images/whitepolo.jpg";
import headphone from "../../../../public/images/headphone.jpg";
import headphone1 from "../../../../public/images/headphone.png";
import lifestyle from "../../../../public/images/lifestyle.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
}

interface ProductItemsProps {
  addToCart: (product: Product) => void;
}

const ProductItems: React.FC<ProductItemsProps> = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [inputValue, setInputValue] = useState("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Pure White Polo",
      price: 83,
      image: blackpolo,
      category: "Men Fashion",
    },
    {
      id: 2,
      name: "Pure Black Polo",
      price: 90,
      image: bluepolo,
      category: "Men Fashion",
    },
    {
      id: 3,
      name: "White Polo",
      price: 50,
      image: whitepolo,
      category: "Men Fashion",
    },
    {
      id: 4,
      name: "Electronic Gadget",
      price: 120,
      image: headphone,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Home Decor ",
      price: 60,
      image: lifestyle,
      category: "Home & Lifestyle",
    },
    {
      id: 6,
      name: "Home Decor Item",
      price: 160,
      image: headphone1,
      category: "Electronics",
    },
  ];

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All Categories"
        ? true
        : product.category === selectedCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSidebarToggle = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const handleSidebarClose = () => {
    setShowMobileSidebar(false);
  };

  return (
    <>
      <div className={searchStyle.rightSideHeaderTop}>
        <div className={searchStyle.rightSideHeaderTopLeft}>
          <IoSearchSharp />
          <input
            type="text"
            placeholder="Search Product..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className={searchStyle.rightSideHeaderTopRight}>
          <FaBarcode />
        </div>
      </div>
      <div className={style.productItemsSection}>
        <div className={style.productItemsManu}>
          {/* Desktop version */}
          <div className={style.desktopSidebar}>
            <button onClick={() => setSelectedCategory("All Categories")}>
              All Categories
            </button>
            <button onClick={() => setSelectedCategory("Men Fashion")}>
              Men Fashion
            </button>
            <button onClick={() => setSelectedCategory("Electronics")}>
              Electronics
            </button>
            <button onClick={() => setSelectedCategory("Home & Lifestyle")}>
              Home & Lifestyle
            </button>
            <button onClick={handleSidebarToggle}>
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        {/* Mobile version */}
        <div className={style.mobileSidebar}>
          {showMobileSidebar && (
            <div className={style.mobileSidebarManu}>
              <button className={style.closebtn} onClick={handleSidebarClose}>
                <RxCross1 />
              </button>
              <div className={style.mobileSidebarManuName}>
                <button onClick={() => setSelectedCategory("All Categories")}>
                  All Categories
                </button>
                <button onClick={() => setSelectedCategory("Men Fashion")}>
                  Men Fashion
                </button>
                <button onClick={() => setSelectedCategory("Electronics")}>
                  Electronics
                </button>
                <button onClick={() => setSelectedCategory("Home & Lifestyle")}>
                  Home & Lifestyle
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={style.product}>
          {filteredProducts.map((product) => (
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
    </>
  );
};

export default ProductItems;
