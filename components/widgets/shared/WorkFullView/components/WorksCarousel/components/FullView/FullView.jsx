import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import NavButtons from "./components/NavButtons/NavButtons";

import classNames from "classnames";
import cl from "./styles/FullView.module.scss";

const FullView = ({ artData, setWorkInView, workInView }) => {
  let worksCount = 0;

  function handleWorksAdjustment(action) {
    let overflow = worksCount - workInView;
    if (action === "+" && overflow > 0) {
      setWorkInView((prev) => prev + 1);
    } else if (action === "-" && workInView > 1) {
      setWorkInView((prev) => prev - 1);
    }
  }

  useEffect(() => {});

  const works = artData.works.map((work) => {
    const returnedJSX = (
      <div
        key={work.name}
        className={classNames(cl["work-image-wrapper"])}
        style={{
          transform: `translateX(${100 * (worksCount - (workInView - 1))}%`,
        }}
      >
        <Image
          className={classNames(cl["work-image"])}
          key={work.name}
          width="0"
          height="0"
          sizes="100vw"
          src={work.url}
          alt={work.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    );
    worksCount += 1;
    return returnedJSX;
  });
  function adjustWorkImages(worksArray) {}
  return (
    <>
      <div className={classNames(cl["fullview__works-container"])}>
        {works}
        <NavButtons handleWorksAdjustment={handleWorksAdjustment} />
      </div>
    </>
  );
};

export default FullView;
