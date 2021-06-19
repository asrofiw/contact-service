import React from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const Modal = ({ open, children, onRequestClose }) => {
  const modalClass = `${style.modal} ${open ? style.open : ""}`.trim();

  return (
    <div className={modalClass}>
      <div className={style.inner}>
        <p className={style.exit} onClick={onRequestClose}>X</p>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
