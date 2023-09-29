import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/Thumbnails.module.scss";

const Thumbnails = ({ artData, setWorkInView, workInView }) => {
  const works = artData.works.map((work, index) => {
    let current = workInView === index + 1;
    return (
      <div key={index} onClick={()=>setWorkInView(index + 1)} className={classNames(cl["thumbnail-wrapper"])}>
        <Image
          className={classNames(cl["thumbnail-image"], current ? cl["current-work"] : "")}
          key={work.name}
          width="0"
          height="0"
          sizes="25vw"
          src={work.url}
          alt={work.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // filter: current ? "" : "grayscale(100%)",
            // opacity: current ? 1 : .5
          }}
        />
      </div>
    );
  });
  return (
    <>
      <div className={classNames(cl["thumbnails-container"])}>
        {works}
      </div>
    </>
  );
};

export default Thumbnails;
