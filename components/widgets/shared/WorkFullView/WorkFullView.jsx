import React from "react";
import classNames from "classnames";
import cl from "./styles/WorkFullView.module.scss";
import LightBox from "../Header/components/LightBox/LightBox";

const WorkFullView = ({fullViewOpened, changeFullViewOpened}) => {
  return (
    <div className={classNames(cl["lightbox-view-container"])}>
      <LightBox sectionOpened={fullViewOpened} clickHandler={changeFullViewOpened}/>
      <button
        className={classNames(cl["lightbox-view__close-button"])}></button>
      <div className={classNames(cl["lightbox-view__content"])}>
        <img className={classNames(cl["content__artwork"])} src="" alt="" />
        <div className={classNames(cl["content__info"])}>
          <h2 className={classNames(cl["info--heading"])}></h2>
          <p className={classNames(cl["info-text"])}></p>
        </div>
      </div>
    </div>
  );
};

export default WorkFullView;
