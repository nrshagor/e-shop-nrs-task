import React from "react";
import style from "@/styles/productItems.module.scss";
import Image from "next/image";
import polo from "../../../../public/images/polo.jpg";
const ProductItems = () => {
  return (
    <div className={style.productItemsSection}>
      <div className={style.productItemsManu}>
        <button>All Categorues</button>
        <button>Electronics</button>
        <button>Home & Lifestyle</button>
      </div>
      <div className={style.product}>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$83</span>
          <p>Pure White Plolo</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$90</span>
          <p>Pure Black Plolo</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$50</span>
          <p>White Plolo</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$71</span>
          <p>Black Plolo</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$43</span>
          <p>T shirt Blue</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$60</span>
          <p>Pure Green Plolo</p>
        </div>
        <div className={style.productCard}>
          <Image src={polo} alt="image" />
          <span>$40</span>
          <p>Pure red Plolo</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
