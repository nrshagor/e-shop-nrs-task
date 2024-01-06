import React, { useState } from "react";
import { FaEdit, FaBars, FaPlusCircle } from "react-icons/fa";
import { MdLocalShipping, MdOutlineDataThresholding } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

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
          <button className={style.closebtn} onClick={toggleSidebar}>
            <RxCross1 />
          </button>
          <div className={style.sidebarBody}>
            <div className={style.sidebarManu}>
              <MdDashboard />
              <button>Dashboard</button>
            </div>
            <div className={style.sidebarManu}>
              <IoLocationOutline />
              <button>Location</button>
            </div>
            <div className={style.sidebarManu}>
              <LiaFileInvoiceDollarSolid />
              <button>POS Invoice</button>
            </div>
            <div className={style.sidebarManu}>
              <IoSettingsOutline />
              <button> Settings </button>
            </div>
          </div>
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
