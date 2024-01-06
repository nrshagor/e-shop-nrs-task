import React, { useState } from "react";
import { FaEdit, FaBars, FaPlusCircle } from "react-icons/fa";
import { MdLocalShipping, MdOutlineDataThresholding } from "react-icons/md";
import style from "@/styles/leftSideContent.module.scss";
import Link from "next/link";

const LeftSideHeaderTop = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.leftSideHeaderTop}>
      <button onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className={`${style.sidebar} ${style.sidebarOpen}`}>
          <h1>hello</h1>
          <button onClick={toggleSidebar}>Close</button>
        </div>
      )}

      <Link href="" className={style.headerManuName}>
        <FaEdit /> <p>Note</p>
      </Link>
      <Link href="" className={style.headerManuName}>
        <MdLocalShipping />
        <p>Shipping</p>
      </Link>
      <Link href="" className={style.headerManuName}>
        <MdOutlineDataThresholding /> <p>Hold Orders</p>
      </Link>
      <Link href="" className={style.headerManuName}>
        <FaPlusCircle /> <p>New Item</p>
      </Link>
    </div>
  );
};

export default LeftSideHeaderTop;
