import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import FullView from "./components/FullView/FullView";
import Thumbnails from "./components/Thumbnails/Thumbnails";

import classNames from "classnames";
import cl from "./styles/WorksCarousel.module.scss";

const WorkScarousel = ({ artData, changeFullViewOpened}) => {
  const [workInView, setWorkInView] = useState(1);
  return (
    <>
      <FullView
        artData={artData}
        workInView={workInView}
        setWorkInView={setWorkInView}
      />
      <Thumbnails
        artData={artData}
        workInView={workInView}
        setWorkInView={setWorkInView}
      />
    </>
  );
};

export default WorkScarousel;
