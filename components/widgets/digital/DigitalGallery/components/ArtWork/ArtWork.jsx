import { useState, useEffect } from "react";
import cl from "./styles/ArtWork.module.scss";
import classNames from "classnames";
import LightBox from "@/components/widgets/shared/LightBox/LightBox";
import WorkFullView from "@/components/widgets/shared/WorkFullView/WorkFullView";
import Modal from "@/components/UI/Modal/Modal";
import CloseButton from "@/components/UI/CloseButton/CloseButton";
import { createPortal } from "react-dom";
import Image from "next/image";
const ArtWork = ({ artData }) => {
  const [fullViewOpened, setFullViewOpened] = useState(false);
  function changeFullViewOpened() {
    setFullViewOpened((prev) => !prev);
  }

  return (
    <div
      className={classNames(cl["digital-gallery__artwork-container"])}
      onClick={fullViewOpened ? () => {} : changeFullViewOpened}
    >
      {/* <img
        className={classNames(cl["digital-gallery__artwork"])}
        src={artData.url}
        alt={artData.id}
      /> */}
      <Image
        className={classNames(cl["artwork__preview-image"])}
        fill={true}
        alt={artData.name}
        src={artData["thumbnail-image"]}
        sizes="50vw"
      />
      <div className={classNames(cl["artwork__preview-info"])}>
        <h4 className={classNames(cl["preview-info__heading"])}>
          {artData.name}
        </h4>
        <p className={classNames(cl["preview-info__text"])}>
          {artData.description}
        </p>
      </div>
      {fullViewOpened && (
        <Modal closeButtonOnClick={changeFullViewOpened}>
          <WorkFullView
            artData={artData}
            fullViewOpened={fullViewOpened}
            changeFullViewOpened={changeFullViewOpened}
          />
        </Modal>
      )}
    </div>
  );
};

export default ArtWork;
