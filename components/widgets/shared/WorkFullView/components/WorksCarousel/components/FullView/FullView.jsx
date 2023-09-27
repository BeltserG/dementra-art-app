import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classNames from "classnames";
import cl from "./styles/FullView.module.scss";

const FullView = ({ artData }) => {
  console.log(artData);
 
  const works = artData.works.map((work, index) => {
    
    return (
      <Image
        className={classNames(cl["work-image"])}
        key={work.name}
        // fill={true}
        width="0"
        height="0"
        sizes="100vw"
        src={work.url}
        alt={work.name}
        style={{width: '100%', height: 'auto', transform: `translateX(${0*index}%`}}
      />
    );
  });
  function adjustWorkImages(worksArray){

  }
  return (
    <>
      <div className={classNames(cl["fullview"])}>
        <div className={classNames(cl["fullview__works-container"])}>
          {works}
        </div>
      </div>
    </>
  );
};

export default FullView;
