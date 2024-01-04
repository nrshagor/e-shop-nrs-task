import React from "react";
import style from "@/styles/leftSideContent.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

import Link from "next/link";
import LeftSideHeaderTop from "./LeftSideHeaderTop";
import LeftSideHeaderBottom from "./LeftSideHeaderBottom";
const LeftSideContent = () => {
  return (
    <div>
      <LeftSideHeaderTop />
      <LeftSideHeaderBottom />
    </div>
  );
};

export default LeftSideContent;
