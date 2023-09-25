import { useState, useEffect } from "react";
import cl from "./styles/ArtWork.module.scss";
import classNames from "classnames";
import LightBox from "@/components/widgets/shared/LightBox/LightBox";
import WorkFullView from "@/components/widgets/shared/WorkFullView/UI/WorkFullView";
import Modal from "@/components/UI/Modal/Modal";
import CloseButton from "@/components/widgets/shared/WorkFullView/components/CloseButton/CloseButton";
import { createPortal } from "react-dom";
const ArtWork = ({ artData }) => {
  const [fullViewOpened, setFullViewOpened] = useState(false);

  function changeFullViewOpened() {
    setFullViewOpened((prev) => !prev);
  }

  let modalParent;
  if (typeof document !== "undefined") {
    modalParent = document.querySelector("#modal-view");
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
      <div className={classNames(cl["artwork__preview-info"])}></div>
      {/* {fullViewOpened &&
        createPortal(
          <WorkFullView
            artData={artData}
            fullViewOpened={fullViewOpened}
            changeFullViewOpened={changeFullViewOpened}
          />,
          modalParent
        )} */}
      {fullViewOpened && (
        <Modal>
          <CloseButton onClick={changeFullViewOpened} />
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
