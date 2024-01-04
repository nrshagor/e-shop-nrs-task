import React from "react";
import style from "@/styles/leftSideContent.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
const LeftSideHeaderBottom = () => {
  return (
    <div className={style.leftSideHeaderBottom}>
      <div className={style.headerUserName}>
        <FaUserCircle /> Steve Jobs
      </div>
      <div className={style.headerUserAdd}>
        <IoIosAddCircleOutline />
      </div>
    </div>
  );
};

export default LeftSideHeaderBottom;
