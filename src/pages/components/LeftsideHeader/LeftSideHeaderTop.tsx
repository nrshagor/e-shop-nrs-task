import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { MdOutlineDataThresholding } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import style from "@/styles/leftSideContent.module.scss";
import Link from "next/link";

const LeftSideHeaderTop = () => {
  return (
    <div className={style.leftSideHeaderTop}>
      <button>
        <FaBars />
      </button>
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
