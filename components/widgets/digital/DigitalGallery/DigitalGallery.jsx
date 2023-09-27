import React from "react";
import ArtWork from "./components/ArtWork/ArtWork";
import cl from "./styles/DigitalGallery.module.scss";
import classNames from "classnames";

const DigitalGallery = ({ data }) => {
  return (
    <div className={classNames(cl["digital-gallery"])}>
      {data.collections.map((artData) => (
        <ArtWork key={artData.id} artData={artData} />
      ))}
    </div>
  );
};

export default DigitalGallery;