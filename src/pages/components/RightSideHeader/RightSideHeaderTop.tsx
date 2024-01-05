import React, { useState } from "react";
import style from "@/styles/rightSideConttent.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa";

interface RightSideHeaderTopProps {
  // You can define any props if needed
}

const RightSideHeaderTop: React.FC<RightSideHeaderTopProps> = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={style.rightSideHeaderTop}>
      <div className={style.rightSideHeaderTopLeft}>
        <IoSearchSharp />
        <input
          type="text"
          placeholder="Search Product..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={style.rightSideHeaderTopRight}>
        <FaBarcode />
      </div>
    </div>
  );
};

export default RightSideHeaderTop;
