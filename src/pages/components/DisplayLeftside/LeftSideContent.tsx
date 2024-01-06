import React from "react";
import style from "@/styles/leftSideContent.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

import Link from "next/link";
import LeftSideHeaderTop from "../LeftsideHeader/LeftSideHeaderTop";
import LeftSideHeaderBottom from "../LeftsideHeader/LeftSideHeaderBottom";
import CartItems from "./CartItems";
const LeftSideContent = () => {
  return (
    <div>
      <LeftSideHeaderTop />
      <LeftSideHeaderBottom />
    </div>
  );
};

export default LeftSideContent;
