import React from "react";
import classNames from "classnames";
import cl from "./styles/WorkFullView.module.scss";
import LightBox from "../LightBox/LightBox";
import CloseButton from "../../../UI/CloseButton/CloseButton";
import WorksCarousel from "./components/WorksCarousel/WorksCarousel";
import WorksDescription from "./components/WorksDescription/WorksDescription";
import Image from "next/image";

const WorkFullView = ({ fullViewOpened, changeFullViewOpened, artData }) => {
  // console.log(artData);
  return (
    <div className={classNames(cl["fullview-container"])}>
      <div className={classNames(cl["works-carousel-container"])}>
        <WorksCarousel artData={artData}/>
      </div>
      <div className={classNames(cl["works-description-container"])}>
        <WorksDescription worksDescription={artData.description}/>
      </div>
      {/* <div className={classNames(cl["fullview__content"])}>
        <div className={classNames(cl["artwork-container"])}>
          <Image
            className={classNames(cl["content__artwork"])}
            fill={true}
            src={artData.url}
            alt={artData.name}

          />
        </div>

        <div className={classNames(cl["content__info"])}>
          <h2 className={classNames(cl["info--heading"])}></h2>
          <p className={classNames(cl["info-text"])}></p>
        </div>
      </div> */}
    </div>
  );
};

export default WorkFullView;
