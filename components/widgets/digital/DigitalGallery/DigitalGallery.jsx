import React from "react";
import ArtWork from "./components/ArtWork/ArtWork";
import cl from "./styles/DigitalGallery.module.scss";
import classNames from "classnames";

const DigitalGallery = ({ data }) => {
  // const gallery = data.filter((object) => object.id === "digital-art")[0];
  // console.log(gallery);
  return (
    <div className={classNames(cl["digital-gallery"])}>
      {data.collections.map((artData) => (
        <ArtWork key={artData.id} artData={artData} />
      ))}
    </div>
  );
};

export default DigitalGallery;
