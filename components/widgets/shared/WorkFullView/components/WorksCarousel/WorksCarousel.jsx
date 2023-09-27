import { useState, useEffect, useContext, useReducer } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import FullView from "./components/FullView/FullView";
import Thumbnails from "./components/Thumbnails/Thumbnails";

import classNames from "classnames";
import cl from "./styles/WorkScarousel.module.scss";

const WorkScarousel = ({artData}) => {
  return (
    <>
      <FullView artData={artData}/>
      <Thumbnails artData={artData}/>
    </>
  );
};

export default WorkScarousel;
