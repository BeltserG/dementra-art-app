import React from "react";
import classNames from "classnames";
import cl from "./styles/LightBoxView.module.scss";

const LightWorkView = (props) => {
  return (
    <div className={classNames(cl["lightbox-view-container"])}>
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

export default LightWorkView;
