import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import LightBox from "../../widgets/shared/LightBox/LightBox";
import CloseButton from "../CloseButton/CloseButton";
import { createPortal } from "react-dom";

import classNames from "classnames";
import cl from "./styles/Modal.module.scss";

const Modal = ({ children, closeButtonOnClick }) => {
  let parent;
  if (typeof document !== "undefined") {
    parent = document.querySelector("#modal");
  }
  const content = (
    <div className={classNames(cl["modal-view"])}>
      <LightBox sectionIsOpened={true} clickHandler={closeButtonOnClick} />
      <CloseButton onClick={closeButtonOnClick} />
      {children}
    </div>
  );
  return (
    // <div className={classNames(cl["modal-view"])}>
    //   {createPortal(
    //     <LightBox sectionIsOpened={true} clickHandler={closeButtonOnClick} />,
    //     parent
    //   )}
    //   {createPortal(<CloseButton onClick={closeButtonOnClick} />, parent)}
    //   {createPortal(children, parent)}
    // </div>
    <>{createPortal(content, parent)}</>
  );
};

export default Modal;
