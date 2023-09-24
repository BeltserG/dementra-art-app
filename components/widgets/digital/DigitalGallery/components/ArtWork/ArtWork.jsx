import { useState } from "react";
import cl from "./styles/ArtWork.module.scss";
import classNames from "classnames";
import LightBox from "@/components/widgets/shared/Header/components/LightBox/LightBox";
import WorkFullView from "@/components/widgets/shared/WorkFullView/UI/WorkFullView";
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
      <div className={classNames(cl["artwork__preview-info"])}></div>
      {fullViewOpened && (
        <WorkFullView
          artData={artData}
          fullViewOpened={fullViewOpened}
          changeFullViewOpened={changeFullViewOpened}
        />
      )}
    </div>
  );
};

export default ArtWork;
