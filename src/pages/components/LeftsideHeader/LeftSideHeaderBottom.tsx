import React, { useState } from "react";
import style from "@/styles/leftSideContent.module.scss";
import { MdAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../Modal/Modal";

const LeftSideHeaderBottom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={style.leftSideHeaderBottom}>
      <div className={style.headerUserName}>
        <button onClick={openModal}>
          <FaUserCircle /> Steve Jobs
        </button>
      </div>
      <div className={style.headerUserAdd}>
        <button onClick={openModal}>
          <IoIosAddCircleOutline />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form action="">
          <div className={style.modalBody}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Currency" />
            <input type="text" placeholder="TAX ID" />
          </div>
          <div className={style.addMoreDetails}>
            <MdAdd /> <p>Add More Details</p>
          </div>

          <button type="submit" className={style.update}>
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default LeftSideHeaderBottom;
